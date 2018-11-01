import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private auth_token: string;
  user: UserInfo;

  constructor() { }

  setToken(userModel: any) {
    this.auth_token = 'token' + Math.random() * 10;
    this.user = new UserInfo(userModel.email, userModel.email, 'kazan');
  }

  get loggedOn(): boolean {
    return this.auth_token != null;
  }

  clear() {
    this.auth_token = null;
  }
}

export class UserInfo {
  constructor(public email: string,
    public name: string,
    public address: string) { }
}
