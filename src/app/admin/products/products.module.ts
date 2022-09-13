import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LayoutsModule } from '../layouts/layouts.module';
import {MatTabsModule} from '@angular/material/tabs';

import {DialogModule} from '@angular/cdk/dialog';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ReviewComponent,
    ProductDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    WidgetsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    LayoutsModule,
    MatTabsModule,
    DialogModule,
  ]
})
export class ProductsModule { }
