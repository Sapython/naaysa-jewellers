import { ReviewComponent } from './review/review.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [{ path: '', component: ProductsComponent },{ path: 'review', component: ReviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
