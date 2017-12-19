import { Pipe, PipeTransform } from '@angular/core';
import { format, ParsedNumber, TelephoneNumber } from 'libphonenumber-js';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(value: TelephoneNumber, args?: string): any {
    if (!value) {
      return value;
    }
    return format(value, 'RU', 'International');
  }
}