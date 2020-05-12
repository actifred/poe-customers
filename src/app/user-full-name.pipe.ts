import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from './models/user.model';

@Pipe({
  name: 'userFullName'
})
export class UserFullNamePipe implements PipeTransform {

  transform(user: UserModel): unknown {
    if (user) {
      return `${user.firstname} ${user.lastname}`;
    }
    return '';
  }

}
