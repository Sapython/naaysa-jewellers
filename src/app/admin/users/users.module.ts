import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutsModule } from '../layouts/layouts.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, MatTabsModule, LayoutsModule],
})
export class UsersModule {}
