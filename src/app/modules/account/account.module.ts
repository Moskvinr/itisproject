import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AccountService } from './account.service';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  providers: [AccountService],
  declarations: []
})
export class AccountModule { }
