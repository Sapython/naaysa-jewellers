import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/Products/products.service';



@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})
export class ManageCategoryComponent implements OnInit {

  public CategoryName:string;
  private url:string;
  public addCategoryForm:FormGroup = new FormGroup({
    title: new FormControl(),
    img: new FormControl(),
  });
  
  public file:any;

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }

  async uploadFile(files:FileList | null){
    if(files){
      const file = files[0]
      const url = await this.productService.upload('productCategory/'+ file.name, file);
      this.url = url
      console.log(url);
    }
    
  }

  async addCategory(){
    console.log(this.file.target.files[0]);
      
    await this.uploadFile(this.file.target.files);
    this.addCategoryForm.value['img'] = this.url;
    
    console.log(this.addCategoryForm.value)

    this.productService.addCategories(this.addCategoryForm.value).then((res)=>{
      console.log(res)
    })
    
  }


}
