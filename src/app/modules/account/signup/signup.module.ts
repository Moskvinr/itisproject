import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupService } from './signup.service';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule
  ],
  providers: [SignupService],
  declarations: [SignupComponent]
})
export class SignupModule { }
