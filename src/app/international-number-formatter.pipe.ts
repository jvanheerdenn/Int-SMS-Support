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
    let data = flagsNameCountryCode;
    const hasPlus = value.slice(0, 3) === '011' ? true : false;
    console.log(hasPlus);
    const numberWithoutPlus = value.slice(3);
    if (hasPlus) {
      let countryPrefix: number;
      if (value !== value.replace(/  /g, ' ')) {
        countryPrefix = parseInt(value.slice(3, 4));
      } else {
        countryPrefix = parseInt(value.slice(3, 6));
      }
      const countryData = data.find((el) => el.countryPrefix === countryPrefix);
      const number = this.libraryInstance.parseAndKeepRawInput(
        numberWithoutPlus,
        countryData.regionCode
      );
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
