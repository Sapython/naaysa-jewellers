import { TenPlusOneSchemaModule } from './ten-plus-one-schema/ten-plus-one-schema.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product-page/product-page.module').then(
        (m) => m.ProductPageModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'choose-delivery-address',
    loadChildren: () =>
      import('./choose-delivery-address/choose-delivery-address.module').then(
        (m) => m.ChooseDeliveryAddressModule
      ),
  },
  {
    path: 'payment-options',
    loadChildren: () =>
      import('./payment-options/payment-options.module').then(
        (m) => m.PaymentOptionsModule
      ),
  },
  {
    path: 'add-delivery-address',
    loadChildren: () =>
      import('./add-delivery-address/add-delivery-address.module').then(
        (m) => m.AddDeliveryAddressModule
      ),
  },
  {
    path: 'vr-product-try',
    loadChildren: () =>
      import('./vr-product-try/vr-product-try.module').then(
        (m) => m.VrProductTryModule
      ),
  },
  {
    path: 'ten-plus-one-scheme',
    loadChildren: () =>
      import('./ten-plus-one/ten-plus-one.module').then(
        (m) => m.TenPlusOneModule
      ),
  },
  {
    path: 'ten-plus-schema',
    loadChildren: () =>
      import('./ten-plus-one-schema/ten-plus-one-schema.module').then(
        (m) => m.TenPlusOneSchemaModule
      ),
  },
  {
    path: 'order-details',
    loadChildren: () =>
      import('./order-details/order-details.module').then(
        (m) => m.OrderDetailsModule
      ),
  },
  {
    path: 'order-history',
    loadChildren: () =>
      import('./order-history/order-history.module').then(
        (m) => m.OrderHistoryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
