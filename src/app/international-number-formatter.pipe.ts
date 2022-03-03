import { Pipe, PipeTransform } from '@angular/core';
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';
import { flagsNameCountryCode } from './data';

@Pipe({
  name: 'internationalNumberFormatter',
})
export class InternationalNumberFormatterPipe implements PipeTransform {
  private readonly libraryInstance = PhoneNumberUtil.getInstance();
  transform(value: string): string | null {
    if (!value) return null;
    const hasPlus = value.slice(0, 3) === '011' ? true : false;
    if (hasPlus) {
      const numberWithoutPlus = value.slice(3);
      const countryPrefix =
        value !== value.replace(/  /g, ' ')
          ? parseInt(value.slice(3, 4))
          : parseInt(value.slice(3, 6));
      const countryData = flagsNameCountryCode.find(
        (el) => el.countryPrefix === countryPrefix
      );
      const number = this.libraryInstance.parseAndKeepRawInput(
        numberWithoutPlus,
        countryData.regionCode
      );
      console.log(countryData);
      return this.libraryInstance.format(
        number,
        PhoneNumberFormat.INTERNATIONAL
      );
    } else {
      const number = this.libraryInstance.parseAndKeepRawInput(value, 'US');
      return this.libraryInstance.format(
        number,
        PhoneNumberFormat.INTERNATIONAL
      );
    }
  }
}
