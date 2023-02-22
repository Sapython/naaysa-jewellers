import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/admin/services/database.service';
import { Product } from 'src/app/structures/product.structure';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products:Product[] = []

  constructor(private databaseService:DatabaseService) { }

  ngOnInit(): void {
    this.databaseService.getProducts().then((prods)=>{
      prods.forEach((product)=>{
        this.products.push({...product.data(),id:product.id} as Product);
      })
    })
  }

}
