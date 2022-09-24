import { WidgetsModule } from './../../widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ClientModule } from '../client.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    WidgetsModule,
    ComponentsModule,
    ClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
