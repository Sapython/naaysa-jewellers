import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ShopByMetalModule } from './shop-by-metal/shop-by-metal.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ShopByMetalModule
  ]
})
export class ClientModule { }
