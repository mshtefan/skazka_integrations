import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersByType'
})
export class UsersByTypePipe implements PipeTransform {

  transform(users: Array<any>, type: any): any[] {
    if(!users || !users.length) return [];
    if(!type) return users;
    return users.filter(user => {
      return user.tags.filter(tag => {
        return tag.name == type.tag 
      }).length
    });
  }

}
