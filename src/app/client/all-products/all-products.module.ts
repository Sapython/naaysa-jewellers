import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './all-products.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    AllProductsRoutingModule,
    ComponentsModule,
    WidgetsModule
  ]
})
export class AllProductsModule { }
