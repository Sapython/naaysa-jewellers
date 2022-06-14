import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDeliveryAddressRoutingModule } from './add-delivery-address-routing.module';
import { AddDeliveryAddressComponent } from './add-delivery-address.component';


@NgModule({
  declarations: [
    AddDeliveryAddressComponent
  ],
  imports: [
    CommonModule,
    AddDeliveryAddressRoutingModule
  ]
})
export class AddDeliveryAddressModule { }
