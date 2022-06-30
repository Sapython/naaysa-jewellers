import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductWidgetComponent } from './product-widget/product-widget.component';
import { MetalWidgetComponent } from './metal-widget/metal-widget.component';
import { PaymentOptionWidgetComponent } from './payment-option-widget/payment-option-widget.component';


const components = [ ProductWidgetComponent,MetalWidgetComponent,PaymentOptionWidgetComponent]
@NgModule({
  declarations: [
    components,
    MetalWidgetComponent,
    PaymentOptionWidgetComponent
  ],
  exports: [components],
  imports: [
    CommonModule
  ]
})
export class WidgetsModule { }
