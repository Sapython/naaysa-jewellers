import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    WidgetsModule
  ]
})
export class ProductsModule { }
