import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule,
     UsersRoutingModule,
      MatTabsModule],
})
export class UsersModule {}
