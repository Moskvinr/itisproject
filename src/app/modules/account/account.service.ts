import { Injectable } from '@angular/core';
import { UserInfoService } from 'src/app/common/user-info.service';
import { of } from 'rxjs';

const USERS: User[] = [
  { id: 1, email: 'first', password: '123' },
  { id: 2, email: 'second', password: '123' },
];

@Injectable()
export class AccountService {

  constructor(private userinfoService: UserInfoService) { }

  checkifUserExists(userModel: any) {
    if (USERS.some(user => user.email.toLowerCase().trim() === userModel.email.toLowerCase().trim()
      && user.password === userModel.password)) {
      this.userinfoService.setToken(userModel);
      return of(true);
    }
  }
}
export class User {
  constructor(public id: number, public email: string, public password: string) { }
}
