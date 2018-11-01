import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileService } from './profile.service';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  providers: [ProfileService],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
