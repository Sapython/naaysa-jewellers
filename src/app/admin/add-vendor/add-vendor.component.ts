import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/Products/products.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {


  public addVendorForm:FormGroup = new FormGroup({
    vendorName: new FormControl(),
    vendorEmail: new FormControl(),
    vendorId: new FormControl(),
    vendorImg: new FormControl(),

  });

  public url:string;
  public file:any;


  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }

  async uploadFile(files: FileList | null) {
    if (files) {
      const file = files[0]
      const url = await this.productService.upload('vendors/' + file.name, file);
      this.url = url
    }
  }

  async addVendor() {
    await this.uploadFile(this.file.target.files);
    this.addVendorForm.value['vendorImg'] = this.url;

    if (this.addVendorForm.value) {
      this.productService.addVendor(this.addVendorForm.value).then((res) => {
        // console.log(res)
      })
    }
    alert('Product added')
  }

}
