import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutsModule } from '../layouts/layouts.module';
import {MatDialogModule} from '@angular/material/dialog';
import { AddUsersComponent } from './add-users/add-users.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';


@NgModule({
  declarations: [UsersComponent, AddUsersComponent],
  imports: [CommonModule, UsersRoutingModule, MatTabsModule, LayoutsModule, MatDialogModule,WidgetsModule],
})
export class UsersModule {}
