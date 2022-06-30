import { WidgetsModule } from './../../widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenPlusOneSchemaRoutingModule } from './ten-plus-one-schema-routing.module';
import { TenPlusOneSchemaComponent } from './ten-plus-one-schema.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    TenPlusOneSchemaComponent
  ],
  imports: [
    CommonModule,
    TenPlusOneSchemaRoutingModule,
    WidgetsModule,
    ComponentsModule
  ]
})
export class TenPlusOneSchemaModule { }
