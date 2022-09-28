import { Dialog } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { AddProductsComponent } from '../../products/add-products/add-products.component';
import { ManageCategoryComponent } from '../../products/manage-category/manage-category.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  editMode: boolean = false;

  constructor(private dialog:Dialog) {}
  emitButtonAction(action: 'viewAsTable' | 'viewAsCard') {}
  path: any;
  ngOnInit(): void {
    this.path = window.location.pathname;
    console.log(this.path);
  }

  
  manageCategory(){
    this.dialog.open(ManageCategoryComponent)
  }

  addProduct(){
    this.dialog.open(AddProductsComponent)
  }
}
