import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SigninService } from './signin.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule
  ],
  providers: [SigninService],
  declarations: [SigninComponent]
})
export class SigninModule { }
