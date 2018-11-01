import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './profile/profile.module#ProfileModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninModule' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AccountRoutingModule { }
