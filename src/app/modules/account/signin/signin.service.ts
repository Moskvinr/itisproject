import { Injectable } from '@angular/core';
import { AccountService } from '../account.service';
import { Signin } from './signin.component';
import { Observable } from 'rxjs';

@Injectable()
export class SigninService {

  constructor(private accountService: AccountService) { }

  checkIfUserExists(signinModel: Signin): Observable<boolean> {
    return this.accountService.checkifUserExists(signinModel);
  }

}
