import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VrProductTryRoutingModule } from './vr-product-try-routing.module';
import { VrProductTryComponent } from './vr-product-try.component';


@NgModule({
  declarations: [
    VrProductTryComponent
  ],
  imports: [
    CommonModule,
    VrProductTryRoutingModule
  ]
})
export class VrProductTryModule { }
