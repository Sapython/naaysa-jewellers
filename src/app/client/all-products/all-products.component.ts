import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { DatabaseServiceService } from 'src/app/services/database-service/database-service.service';
import { DataproviderService } from 'src/app/services/dataprovider.service';
import { ProductsService } from 'src/app/services/Products/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private auth: AuthService,
    private dataProvider: DataproviderService,
    private databaseService: DatabaseServiceService
  ) {}

  products: any[] = [];
  categories: any[] = [];
  public userId: any;
  dbUserDetail: any;

  async ngOnInit(): Promise<void> {
    let localCategories:any[] = []
    const res = await this.productsService.getCategories();
    res.forEach((element: any) => {
      localCategories.push({...element.data(), id: element.id});
    })
    var localProducts:any[] = []
    var productsRef = await this.productsService.getProducts();
    productsRef.forEach((element: any) => {
      localProducts.push({...element.data(), id: element.id});
    })
    localCategories.forEach((element: any) => {
      this.categories.push({...element,products:localProducts.filter((product:any)=>product.category == element.title)})
    })
    console.log(this.categories);
    // this.getProductsCategory();
    this.auth.getUser.subscribe((res) => {
      this.userId = res?.uid;
      this.getUser();
    });
  }

  public getUser() {
    this.databaseService
      .getDbUser(this.userId)
      .then((res) => {
        this.dbUserDetail = res.data();
        console.log(this.dbUserDetail);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async getAllProductsByCat() {
    const res: any = await this.productsService.getProducts();
    res.forEach((element: any) => {
      this.products.push({
        ...element.data(),
        id: element.id,
      });
    });
    console.log(this.products);
  }

  async getProductsCategory() {
    const res: any = await this.productsService.getCategories();
    res.forEach((element: any) => {
      this.categories.push({
        ...element.data(),
        id: element.id,
      });
    });
    console.log(this.categories);
  }
}
