import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { LayoutsModule } from '../layouts/layouts.module';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import { AddUsersComponent } from './add-users/add-users.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';


@NgModule({
  declarations: [UsersComponent, AddUsersComponent],
  imports: [CommonModule, UsersRoutingModule, MatTabsModule, LayoutsModule, MatDialogModule,WidgetsModule],
})
export class UsersModule {}
