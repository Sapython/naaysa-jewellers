import { DialogRef } from '@angular/cdk/dialog';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category, Material, Variant } from 'src/app/structures/product.structure';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers:[{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: {showError: true},
  }],
})
export class AddProductComponent implements OnInit {
  constructor(public dialogRef:DialogRef,private databaseService:DatabaseService){}
  productImages:string[] = [];
  productImageFiles:File[] = [];
  productImagesData:string[] = [];
  uploadPercent:number = 0;
  variants:Variant[] = [];
  materials:Material[] = [
    {name:'Gold', quantity:0},
    {name:'Silver', quantity:0},
    {name:'Platinum', quantity:0},
    {name:'Diamond', quantity:0},
    { name:'Bronze', quantity:0},
    { name:'Brass', quantity:0},
    {name:'Steel', quantity:0},
    {name:'Copper', quantity:0},
    {name:'Ruby', quantity:0},
    {name:'Sapphire', quantity:0},
    {name:'Emerald', quantity:0},
    {name:'Pearl', quantity:0},
    {name:'Topaz', quantity:0},
    {name:'Amethyst', quantity:0},
    {name:'Opal', quantity:0},
    {name:'Onyx', quantity:0},
    {name:'Turquoise', quantity:0},
  ];
  filteredMaterials:Material[] = [];
  selectedMaterials:Material[] = [];
  categories:Category[] = [];
  formStage:0|1|2 = 0;
  uploading:boolean = false;
  ratings:number[] = [1,1.5,2,2.5,3,3.5,4,4.5,5];
  productForm:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    averageRating: new FormControl(''),
  })

  materialsForm:FormGroup = new FormGroup({})

  ngOnInit(){
    this.getCategories();
    this.filteredMaterials = this.materials;
  }

  getCategories(){
    this.databaseService.getCategories().then((res)=>{
      this.categories = res.docs.map((doc:any)=>{return {id:doc.id, ...doc.data()}});
    })
  }

  setMaterial(material:string){
    console.log(this.selectedMaterials);
    return !this.selectedMaterials.some((selectedMaterial)=>{
      return selectedMaterial.name === material;
    })
  }

  addMaterial(){
    this.selectedMaterials.push({name:'', quantity:0});
  }

  removeMaterial(index:number){
    this.selectedMaterials.splice(index, 1);
  }
  
  removeImage(index:number){
    this.productImages.splice(index, 1);
    this.productImageFiles.splice(index, 1);
    this.productImagesData.splice(index, 1);
  }

  addImages(event:any){
    const files = event.target.files;
    // check if files are less than 1mb and are images
    for(let i = 0; i < files.length; i++){
      if(files[i].size > 1000000){
        alert('File size is too large');
        return;
      }
      if(!files[i].type.includes('image')){
        alert('File is not an image');
        return;
      }
    }
    // add files to productImageFiles
    // add files to productImages
    for(let i = 0; i < files.length; i++){
      const reader = new FileReader();
      reader.onload = (event:any) => {
        this.productImagesData.push(event.target.result);
      }
      reader.readAsDataURL(files[i]);
      this.productImageFiles.push(files[i]);
    }
  }

  cancel(){
    this.dialogRef.close();
  }

  async basicDetailSubmit(){
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.formStage = 1;
      await this.uploadImages();
      await this.databaseService.addProduct({...this.productForm.value, images:this.productImages})
      this.uploadPercent = 1;
      this.uploading = false;
    } else {
      console.log('invalid form');
      alert('Invalid Form');
    }
  }

  async uploadImages(){
    this.uploading = true;
    for (const imageFile of this.productImageFiles) {
      let res = await this.databaseService.upload('products/images/'+(this.generateId())+imageFile.name,imageFile)
      this.productImages.push(res);
      this.uploadPercent = Math.floor((this.productImages.length/(this.productImageFiles.length + 1))*100);
    }
  }

  generateId(){
    return Math.floor(Math.random()*100000000000000000);
  }
  
}
