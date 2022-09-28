import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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


  products: any[] = [];




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
 



}
