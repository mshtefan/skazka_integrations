import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersByName'
})
export class UsersByNamePipe implements PipeTransform {

  transform(users: Array<any>, searchString: string): any[] {
    if(!users || !users.length) return [];
    if(!searchString) return users;
    return users.filter(user => {
      let fields = ['first_name', 'last_name'];
      let searchWords = searchString.split(' ');
      return fields.some((field): any => {
        return user[field] && searchWords.some((word): any => {
          return word.toLowerCase() && user[field].toLowerCase().indexOf(word) === 0
        })
      })
    });
  }

}
