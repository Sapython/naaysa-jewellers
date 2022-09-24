import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { DataproviderService } from 'src/app/services/dataprovider.service';
import { ProductsService } from 'src/app/services/Products/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  constructor(private productsService: ProductsService, private auth: AuthService, private dataProvider: DataproviderService) { }

  products: any[] = [];
  categories: any[] = [];
  public userId: any;
  dbUserDetail:any;



  ngOnInit(): void {
    this.getAllProductsByCat();
    this.getProductsCategory();
    this.auth.getUser.subscribe((res) => { this.userId = res?.uid; this.getUser(); })
  }

  public getUser() {
    this.auth.getDbUser(this.userId).then((res) => {this.dbUserDetail = res.data()
     console.log(this.dbUserDetail)
    })
      .catch((err) => {
        console.log(err)
      })
  }

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


  // addToWishlist(productId: any) {
  //   this.productsService.productById(productId).then((res) => {
  //     console.log(res.data())
  //     const productData = res.data()
  //     this.auth.userWishlist(this.userId, productData).then((res)=>{console.log(res)})
  //   })
    
  // }


}
