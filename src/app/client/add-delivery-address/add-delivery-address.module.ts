import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDeliveryAddressRoutingModule } from './add-delivery-address-routing.module';
import { AddDeliveryAddressComponent } from './add-delivery-address.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    AddDeliveryAddressComponent
  ],
  imports: [
    CommonModule,
    AddDeliveryAddressRoutingModule,
    ComponentsModule
  ]
})
export class AddDeliveryAddressModule { }
