import { Component, OnInit } from '@angular/core';
import { SigninService } from './signin.service';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public signinModel: Signin = new Signin('', '');
  public errorMessage: string;


  constructor(private signinService: SigninService,
    private router: Router) { }

  signin(form: NgForm) {
    if (form.valid) {
      this.signinService.checkIfUserExists(this.signinModel)
        .subscribe(resp => {
          if (resp) {
            this.router.navigateByUrl('');
          }
          this.errorMessage = 'bad login or password';
        });
    } else {
      this.errorMessage = 'smtng went wrong';
    }
  }

  ngOnInit() {
  }

}


export class Signin {
  constructor(email: string,
    password: string) { }
}
