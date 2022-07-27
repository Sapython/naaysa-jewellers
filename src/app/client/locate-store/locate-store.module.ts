import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { LocateStoreRoutingModule } from './locate-store-routing.module';
import { LocateStoreComponent } from './locate-store.component';


@NgModule({
  declarations: [
    LocateStoreComponent
  ],
  imports: [
    CommonModule,
    LocateStoreRoutingModule,
    MatDividerModule,
    
  ]
})
export class LocateStoreModule { }
