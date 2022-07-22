import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { OrderDetailRoutingModule } from './order-detail-routing.module';
import { OrderDetailComponent } from './order-detail.component';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    OrderDetailRoutingModule,
    MatDividerModule,
    MatStepperModule
  ]
})
export class OrderDetailModule { }
