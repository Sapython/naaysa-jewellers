import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  card:boolean = false;
  path: string = window.location.pathname;
  constructor(private dialog:Dialog) {}
  ngOnInit(): void {
   
  }

  addProduct(){
    const dialog = this.dialog.open(AddProductComponent)
    dialog.closed.subscribe((res)=>{
      console.log(res);
    })
  }

  manageCategories(){
    const dialog = this.dialog.open(ManageCategoryComponent)
    dialog.closed.subscribe((res)=>{
      console.log(res);
    })
  }

}
