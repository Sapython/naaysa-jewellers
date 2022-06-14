import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentOptionsRoutingModule } from './payment-options-routing.module';
import { PaymentOptionsComponent } from './payment-options.component';


@NgModule({
  declarations: [
    PaymentOptionsComponent
  ],
  imports: [
    CommonModule,
    PaymentOptionsRoutingModule
  ]
})
export class PaymentOptionsModule { }
