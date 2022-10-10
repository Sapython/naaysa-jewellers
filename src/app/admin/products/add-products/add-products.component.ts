import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/Products/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

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
    vendorName: new FormControl(''),
    vendorID: new FormControl(''),
    vendorEmail: new FormControl(''),
    productCode: new FormControl(''),
    countryOfOrigin: new FormControl(''),
    formControlName: new FormControl(''),
    width: new FormControl(''),
    height: new FormControl(''),
    main_metal: new FormControl(''),
    carat: new FormControl(''),
    selling_price: new FormControl(''),
    cost_price: new FormControl(''),
    metals_price: new FormControl(''),
    profit: new FormControl(''),
  });

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }


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
