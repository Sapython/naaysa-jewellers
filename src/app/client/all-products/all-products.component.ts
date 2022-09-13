import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/Products/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  // trendingProducts: any[] = [];
  // NecklaceProducts: any[] = [];
  // RingsProducts: any[] = [];
  // BandsProducts: any[] = [];
  products: any[] = [];
  categories: any[] = [];
  


  ngOnInit(): void {
    // this.getTrendingProducts();
    // this.getNecklaceProducts();
    // this.getRingsProducts();
    // this.getBandsProducts();
    this.getAllProductsByCat();
    this.getProductsCategory()
  }

  
  // async getTrendingProducts() {
  //   const res: any = await this.products.getTrendingProducts()

  //   res.forEach((element: any) => {
  //     this.trendingProducts.push(
  //       {
  //         ...element.data(),
  //         id: element.id
  //       }
  //     )
  //   });
  //   console.log(this.trendingProducts)
  // }

  // async getNecklaceProducts() {
  //   const res: any = await this.products.getNecklaceProducts()

  //   res.forEach((element: any) => {
  //     this.NecklaceProducts.push(
  //       {
  //         ...element.data(),
  //         id: element.id
  //       }
  //     )
  //   });
  //   console.log(this.NecklaceProducts)
  // }

  // async getRingsProducts() {
  //   const res: any = await this.products.getRingsProducts()

  //   res.forEach((element: any) => {
  //     this.RingsProducts.push(
  //       {
  //         ...element.data(),
  //         id: element.id
  //       }
  //     )
  //   });
  //   console.log(this.RingsProducts)
  // }

  // async getBandsProducts() {
  //   const res: any = await this.products.getBrandsProducts()

  //   res.forEach((element: any) => {
  //     this.BandsProducts.push(
  //       {
  //         ...element.data(),
  //         id: element.id
  //       }
  //     )
  //   });
  //   console.log(this.BandsProducts)
  // }

  // async getEarRingsProducts() {
  //   const res: any = await this.products.getEarRingsProducts()

  //   res.forEach((element: any) => {
  //     this.EarRingsProducts.push(
  //       {
  //         ...element.data(),
  //         id: element.id
  //       }
  //     )
  //   });
  //   console.log(this.EarRingsProducts)
  // }


  async getAllProductsByCat() {
    const res: any = await this.productsService.getProducts()

    

    res.forEach((element: any) => {
      this.products.push(
        {
          ...element.data(),
          id: element.id
        }
      )
    });
    console.log(this.products)
  }

  async getProductsCategory() {
    const res: any = await this.productsService.getCategories()
    //  this.byCategory = Array.from(res).map((element:any) => {
    //     return {
    //       ...element.data(),
    //       id:element.id
    //     }
    //   });
    res.forEach((element: any) => {
      this.categories.push(
        {
          ...element.data(),
          id: element.id
        }
      )


    });
    console.log(this.categories)
  }
  

}
