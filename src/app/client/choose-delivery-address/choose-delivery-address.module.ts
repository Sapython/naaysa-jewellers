import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseDeliveryAddressRoutingModule } from './choose-delivery-address-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { ChooseDeliveryAddressComponent } from './choose-delivery-address.component';
import { AddressCardComponent } from './address-card/address-card.component';


@NgModule({
  declarations: [
    ChooseDeliveryAddressComponent,
    AddressCardComponent
  ],
  imports: [
    CommonModule,
    ChooseDeliveryAddressRoutingModule,
    ComponentsModule
  ]
})
export class ChooseDeliveryAddressModule { }
