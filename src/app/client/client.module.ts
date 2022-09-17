import { TenPlusOneComponent } from './../admin/ten-plus-one/ten-plus-one.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const components = [TenPlusOneComponent]
@NgModule({
  declarations: [
  
  
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule
    

  ]
})
export class ClientModule { }
