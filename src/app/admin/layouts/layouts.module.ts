import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { HeaderComponent } from './header/header.component';
import { ManageCategoryComponent } from '../products/manage-category/manage-category.component';
import { DialogModule } from '@angular/cdk/dialog';


@NgModule({
  declarations: [
    HeaderComponent,
    ManageCategoryComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule
    
  
  ],
  exports: [
    HeaderComponent
  ]
})
export class LayoutsModule { }
