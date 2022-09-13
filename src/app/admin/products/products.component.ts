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


  public file: any;
  public url: string;

  public addProductForm: FormGroup = new FormGroup({
    productName: new FormControl(''),
    imgSrc: new FormControl(''),
    jewelleryName: new FormControl(''),
    discount: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    purity: new FormControl(''),
    description: new FormControl(''),
    shortDescription: new FormControl(''),
    seoDescription: new FormControl(''),
    baseWeight: new FormControl(''),
    productColor: new FormControl(''),
    metal: new FormControl(''),
    vendorName: new FormControl(''),
    vendorID: new FormControl(''),
    vendorEmail: new FormControl(''),
  });




  constructor(private _formBuilder: FormBuilder, private productService: ProductsService) { }

  ngOnInit(): void { }


  async uploadFile(files: FileList | null) {
    if (files) {
      const file = files[0]
      const url = await this.productService.upload('productCategory/' + file.name, file);
      this.url = url
    }
  }

  async addProduct() {
    await this.uploadFile(this.file.target.files);
    this.addProductForm.value['imgSrc'] = this.url;

    if (this.addProductForm.value) {
      this.productService.addProductsByCat(this.addProductForm.value).then((res) => {
        // console.log(res)
      })
    }
    alert('Product added')
  }




}
