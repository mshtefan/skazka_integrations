import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyDate'
})
export class PrettyDatePipe implements PipeTransform {

  months: string[] = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  short_months: string[] = ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сент', 'окт', 'нояб', 'дек'];

  transform(value: string, type?: string): string {
    if (!value) return null;
    let options = type && type == 'short' ? this.short_months : this.months;
    let date = new Date(value);
    let dateArray = [date.getUTCDate(), date.getUTCMonth() && options[date.getUTCMonth()] || date.getUTCMonth(), type != 'short' ? date.getUTCFullYear() : null];
    if (options && date) {
      return dateArray.filter(item => item).join(' ');
    } else {
      return value
    }

  }

}