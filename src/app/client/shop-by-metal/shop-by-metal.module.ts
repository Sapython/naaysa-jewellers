import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopByMetalRoutingModule } from './shop-by-metal-routing.module';
import { ShopByMetalComponent } from './shop-by-metal.component';


@NgModule({
  declarations: [
    ShopByMetalComponent
  ],
  imports: [
    CommonModule,
    ShopByMetalRoutingModule
  ]
})
export class ShopByMetalModule { }
