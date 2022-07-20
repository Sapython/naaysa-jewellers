import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorsComponent } from './vendors.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';


@NgModule({
  declarations: [
    VendorsComponent
  ],
  imports: [
    CommonModule,
    VendorsRoutingModule,
    WidgetsModule
  ]
})
export class VendorsModule { }
