import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataproviderService } from 'src/app/services/dataprovider.service';
import { ProductsService } from 'src/app/services/Products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  card: false;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  @Input() id: any = '';

  products: any[] = [];
  productId:any;

  @Output() deleted: EventEmitter<any> = new EventEmitter();


  constructor(private _formBuilder: FormBuilder, private productService: ProductsService, public dataProvider:DataproviderService) { }

  ngOnInit(): void { 
    this.allProductsByCat();
  }

  async allProductsByCat() {
    const res: any = await this.productService.getProducts()
    res.forEach((element: any) => {
      this.products.push(
        {
          ...element.data(),
          id: element.id
        }
      )
    });
    this.dataProvider.products = this.products
    console.log(this.products)
  }

  removeProductTrigger(this: any) {
    let data = {
      id: this.id,
    };
    this.deleted.emit(data);
    this.productId = data;
    console.log(data);
    this.removeProduct()
  }


  removeProduct(){
    this.productService.removeProduct(this.productId.id)
  }
 



}
