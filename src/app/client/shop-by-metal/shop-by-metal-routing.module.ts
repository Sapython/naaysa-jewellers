import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopByMetalComponent } from './shop-by-metal.component';

const routes: Routes = [{ path: '', component: ShopByMetalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopByMetalRoutingModule { }
