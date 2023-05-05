import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ComponentsModule } from '../../components/components.module';
import { CartAddedItemComponent } from './cart-added-item/cart-added-item.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { PincodeComponent } from './pincode/pincode.component';

@NgModule({
  declarations: [
    CartComponent,
    CartAddedItemComponent,
    PincodeComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ComponentsModule,
    WidgetsModule
  ]
})
export class CartModule { }
