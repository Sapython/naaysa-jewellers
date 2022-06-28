import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductWidgetComponent } from './product-widget/product-widget.component';
import { MetalWidgetComponent } from './metal-widget/metal-widget.component';


const components = [ ProductWidgetComponent]
@NgModule({
  declarations: [
    components,
    MetalWidgetComponent
  ],
  exports: [components],
  imports: [
    CommonModule
  ]
})
export class WidgetsModule { }
