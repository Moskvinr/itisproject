import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SignupComponent}])
  ],
  exports: [RouterModule],
  declarations: []
})
export class SignupRoutingModule { }
