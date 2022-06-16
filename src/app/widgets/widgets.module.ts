import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductWidgetComponent } from './product-widget/product-widget.component';


const components = [ ProductWidgetComponent]
@NgModule({
  declarations: [
    components,
    ProductWidgetComponent
  ],
  exports: [components],
  imports: [
    CommonModule
  ]
})
export class WidgetsModule { }
