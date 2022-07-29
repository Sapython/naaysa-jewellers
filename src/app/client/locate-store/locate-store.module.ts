import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { LocateStoreRoutingModule } from './locate-store-routing.module';
import { LocateStoreComponent } from './locate-store.component';
import {MatTabsModule} from '@angular/material/tabs';
import { WidgetsModule } from 'src/app/widgets/widgets.module';


@NgModule({
  declarations: [
    LocateStoreComponent
  ],
  imports: [
    CommonModule,
    LocateStoreRoutingModule,
    MatDividerModule,
    MatTabsModule,
    WidgetsModule
    
  ]
})
export class LocateStoreModule { }
