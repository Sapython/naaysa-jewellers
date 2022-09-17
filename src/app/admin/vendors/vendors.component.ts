import { ProductsService } from 'src/app/services/Products/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  vendors: any[] = []




  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getVendors()
  }




  async getVendors() {
    const res: any = await this.productsService.getVendors()



    res.forEach((element: any) => {
      this.vendors.push(
        {
          ...element.data(),
          id: element.id
        }
      )
    });
    console.log(this.vendors)
  }

}
