import { WidgetsModule } from './../../widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDeliveryAddressRoutingModule } from './add-delivery-address-routing.module';
import { AddDeliveryAddressComponent } from './add-delivery-address.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddDeliveryAddressComponent
  ],
  imports: [
    CommonModule,
    AddDeliveryAddressRoutingModule,
    ComponentsModule,
    WidgetsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddDeliveryAddressModule { }
