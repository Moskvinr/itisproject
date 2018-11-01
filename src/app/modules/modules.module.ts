import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule
  ],
  exports: [ModulesRoutingModule]
})
export class ModulesModule { }
