import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseDeliveryAddressRoutingModule } from './choose-delivery-address-routing.module';
import { ChooseDeliveryAddressComponent } from './choose-delivery-address.component';


@NgModule({
  declarations: [
    ChooseDeliveryAddressComponent
  ],
  imports: [
    CommonModule,
    ChooseDeliveryAddressRoutingModule
  ]
})
export class ChooseDeliveryAddressModule { }
