import { WidgetsModule } from './../../widgets/widgets.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    ComponentsModule,
    WidgetsModule
  ]
})
export class ProductPageModule { }
