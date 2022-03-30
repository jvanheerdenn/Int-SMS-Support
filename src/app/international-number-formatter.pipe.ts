import { Pipe, PipeTransform } from '@angular/core';
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';
import { flagsNameCountryCode } from './data';

@Pipe({
  name: 'internationalNumberFormatter',
})
export class InternationalNumberFormatterPipe implements PipeTransform {
  private readonly libraryInstance = PhoneNumberUtil.getInstance();

  transform(value: string): string | null {
    if (!value) {
      return null;
    }
    const hasPlus = value.slice(0, 3) === '011' ? true : false;
    if (hasPlus) {
      const countryPrefix =
        value !== value.replace(/ {2}/g, ' ')
          ? parseInt(value.slice(5, 6), 10)
          : parseInt(value.slice(3, 6).trim(), 10);
      const countryData = flagsNameCountryCode.find(
        (el) => el.countryPrefix === countryPrefix
      );
      const rawPhoneNumber = value
        .slice(3)
        .trim()
        .slice(countryPrefix.toString().length);
      if (!countryData) {
        return this.getUknownFormat(rawPhoneNumber, countryPrefix);
      }
      const phoneNumber = this.libraryInstance.parseAndKeepRawInput(
        rawPhoneNumber,
        countryData.regionCode
      );
      const formattedNumber = this.libraryInstance.format(
        phoneNumber,
        PhoneNumberFormat.INTERNATIONAL
      );
      return this.getFormattedNumberWithDashes(formattedNumber, [countryData]);
    }

    const usPhoneNumber = this.libraryInstance.parseAndKeepRawInput(
      value,
      'US'
    );
    const usFormattedNumber = this.libraryInstance.format(
      usPhoneNumber,
      PhoneNumberFormat.NATIONAL
    );
    return `+1 ${usFormattedNumber}`;
  }

  private getFormattedNumberWithDashes(
    phoneNumber: string,
    [countryData]: typeof flagsNameCountryCode
  ): string {
    let numberWithoutPrefix = '';
    if (countryData.countryPrefix.toString().length === 1) {
      numberWithoutPrefix = phoneNumber.slice(3).replace(/ /g, '-');
    }
    if (countryData.countryPrefix.toString().length === 2) {
      numberWithoutPrefix = phoneNumber.slice(4).replace(/ /g, '-');
    }
    if (countryData.countryPrefix.toString().length === 3) {
      numberWithoutPrefix = phoneNumber.slice(5).replace(/ /g, '-');
    }
    return `+${countryData.countryPrefix} ${numberWithoutPrefix}`;
  }

  private getUknownFormat(rawPhoneNumber: string, prefix: number): string {
    return `+${prefix} ${rawPhoneNumber}`;
  }
}
