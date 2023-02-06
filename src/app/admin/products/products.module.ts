import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LayoutsModule } from '../layouts/layouts.module';
import { MatTabsModule } from '@angular/material/tabs';
import { DialogModule } from '@angular/cdk/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import {MatInputModule} from '@angular/material/input'; 
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ManageCategoryComponent } from './manage-category/manage-category.component'; 




@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ReviewComponent,
    ProductDetailsComponent,
    AddProductComponent,
    ManageCategoryComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    WidgetsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    LayoutsModule,
    MatTabsModule,
    DialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule
  ],
})
export class ProductsModule {}
