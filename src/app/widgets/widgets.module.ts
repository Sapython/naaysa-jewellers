import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductWidgetComponent } from './product-widget/product-widget.component';
import { MetalWidgetComponent } from './metal-widget/metal-widget.component';
import { PaymentOptionWidgetComponent } from './payment-option-widget/payment-option-widget.component';
import { ReviewWidgetComponent } from './review-widget/review-widget.component';
import { NotificationWidgetComponent } from './notification-widget/notification-widget.component';
import { VendorWidgetComponent } from './vendor-widget/vendor-widget.component';


const components = [ ProductWidgetComponent,MetalWidgetComponent,PaymentOptionWidgetComponent,ReviewWidgetComponent,NotificationWidgetComponent,VendorWidgetComponent]
@NgModule({
  declarations: [
    components,
    MetalWidgetComponent,
    PaymentOptionWidgetComponent,
    ReviewWidgetComponent,
    NotificationWidgetComponent,
    VendorWidgetComponent
  ],
  exports: [components],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class WidgetsModule { }
