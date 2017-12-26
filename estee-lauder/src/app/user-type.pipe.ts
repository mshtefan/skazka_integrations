import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userType'
})
export class UserTypePipe implements PipeTransform {

  transform(user: any, types: object[]): any {
    if (!user || !types) return null;
    let type = types.filter((type: any) => {
      return user.tags.filter(tag => {
        return tag.name == type.tag
      })[0]
    })[0]
    return type;
  }


}
