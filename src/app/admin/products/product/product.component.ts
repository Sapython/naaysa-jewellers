import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataproviderService } from 'src/app/services/dataprovider.service';
import { ProductsService } from 'src/app/services/Products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  card: false;
  @Input() imgSrc: string = '20 April 2022'
  @Input() price: string = '30%'
  @Input() productName: string = '₹ 1,34,507'
  @Input() metal: string = '₹ 900'
  @Input() shortDescription: string = '₹ 15000'
  @Input() weight: string = 'Gold'
  @Input() productColor: string = '₹ 800'
  @Input() purity: string = '₹ 250'
  // @Input() delivery: string = '₹ 150'
  // @Input() total: string = '₹ 1,34,507'
  // @Input() saved: string = '₹ 500'





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


  constructor(private _formBuilder: FormBuilder, private productService: ProductsService) { }

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
