import { WishlistWidgetComponent } from './wishlist-widget/wishlist-widget.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductWidgetComponent } from './product-widget/product-widget.component';
import { MetalWidgetComponent } from './metal-widget/metal-widget.component';
import { PaymentOptionWidgetComponent } from './payment-option-widget/payment-option-widget.component';
import { ReviewWidgetComponent } from './review-widget/review-widget.component';
import { NotificationWidgetComponent } from './notification-widget/notification-widget.component';
import { VendorWidgetComponent } from './vendor-widget/vendor-widget.component';
import { FeatureWidgetComponent } from './feature-widget/feature-widget.component';
import { HistoryComponent } from './history/history.component';
import { MobileCartWidgetComponent } from './mobile-cart-widget/mobile-cart-widget.component';
import { MobileAddressProductWidgetComponent } from './mobile-address-product-widget/mobile-address-product-widget.component';
import { MobileAddressWidgetComponent } from './mobile-address-widget/mobile-address-widget.component';


const components = [ ProductWidgetComponent,
  MetalWidgetComponent,
  PaymentOptionWidgetComponent,
  ReviewWidgetComponent,
  NotificationWidgetComponent,
  VendorWidgetComponent,
  FeatureWidgetComponent,
  WishlistWidgetComponent,
  HistoryComponent,
  MobileAddressProductWidgetComponent,
  MobileCartWidgetComponent,
  MobileAddressWidgetComponent

]
@NgModule({
  declarations: [
    components,
    MetalWidgetComponent,
    PaymentOptionWidgetComponent,
    ReviewWidgetComponent,
    NotificationWidgetComponent,
    VendorWidgetComponent,
    FeatureWidgetComponent,
    HistoryComponent,
    MobileCartWidgetComponent,
    MobileAddressProductWidgetComponent,
    MobileAddressWidgetComponent
  ],
  exports: [components],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class WidgetsModule { }
