import { DialogRef } from '@angular/cdk/dialog';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { DocumentReference, Timestamp } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category, Combination, Variant } from 'src/app/structures/product.structure';
import { Material } from '../../materials/materials.component';
import { DatabaseService } from '../../services/database.service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
  materials:Material[] = [];
  onlineMaterials:Material[] = [];
  filteredMaterials:Material[] = [];
  selectedMaterials:SelectableMaterial[] = [];
  categories:Category[] = [];
  formStage:0|1|2 = 0;
  uploading:boolean = false;
  ratings:number[] = [1,1.5,2,2.5,3,3.5,4,4.5,5];
  metalForm:FormGroup = new FormGroup({
    metal:new FormControl(''),
    color: new FormControl(),
  })
  purities:{name:string}[] = [
    {name:'24 K'},
    {name:'22 K'},
    {name:'18 K'},
    {name:'14 K'},
  ]
  sizes:{name:string,weight:number,variation:number}[] = [
  ]
  productForm:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    averageRating: new FormControl(''),

  })
  colors:{name:string}[] = [
    {name:'Red'},
    {name:'Rose'},
    {name:'White'},
    {name:'Pink'},
  ]
  generatedCombinations:Combination[] = []
  materialsForm:FormGroup = new FormGroup({})
  draftProduct:DocumentReference<any> | undefined;
  tags:{name:string}[]=[]
  metals:{viewValue:string}[] = [
    {viewValue:'GOLD'},
  ]
  ngOnInit(){
    this.getCategories();
    this.databaseService.getMaterials().then((materials)=>{
      this.materials = materials.docs.map((material:any)=>{return {id:material.id, ...material.data()}});
      this.filteredMaterials = this.materials;
    })
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
    this.selectedMaterials.push({
      materials: this.materials,
      name: '',
      selectedVariants:[],
      selectedMaterial:undefined,
      makingRate:0,
      perWeight:false
    });
  }

  log(data:any){
    console.log(data);
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
      try {
        await this.uploadImages();
        Notify.info('Images uploaded.',{zindex:999999})
        this.draftProduct = await this.databaseService.addProduct({...this.productForm.value, images:this.productImages,date:new Date()})
        Notify.info('Basic details saved.',{zindex:999999})
      } catch (error) {
        console.log(error);
        Notify.failure('Problem saving basic details.',{zindex:999999})
      }
      this.uploadPercent = 1;
      this.uploading = false;
      return true;
    } else {
      console.log('invalid form');
      alert('Invalid Form');
      return false;
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

  changedVariant(material:SelectableMaterial,event:any){
    console.log(event);
    let selectedVariants = JSON.parse(JSON.stringify(event.value));
    console.log(selectedVariants);
    selectedVariants.forEach((variant:NewVariant)=>{
      if (!variant.quantity){
        variant.quantity = 0;
      }
      variant.total = (variant.quantity * variant.rate) || 0;
    })
    material.selectedVariants = selectedVariants;
  }

  async generateVariants(){
    console.log(this.selectedMaterials);
    if (!this.draftProduct){
      let res = await this.basicDetailSubmit();
      if(!res){
        return
      }
    } else if(this.draftProduct && typeof this.draftProduct!.id == 'string'){
      this.databaseService.updateProduct(this.draftProduct!.id, {materials:this.selectedMaterials}).then((res)=>{
        Notify.info('Materials saved.',{zindex:999999})
      }).catch((err)=>{
        console.log(err);
        Notify.failure('Problem saving materials.',{zindex:999999})
      })
    } else {
      console.log('Basic details not found');
      return;
    }
    // add name to variants from selectedmaterials
    this.selectedMaterials.forEach((material)=>{
      material.selectedVariants.forEach((variant)=>{
        variant.materialName = material.selectedMaterial?.name;
        variant.titleName = material.name;
      })
    })
    console.log(this.selectedMaterials);
    function getCombinations(arr:any[]){
      if (arr.length === 0) return [[]]
      let [current, ...rest] = arr
      let combinations = getCombinations(rest)
      return current.selectedVariants.reduce((a:any, variantObject:any) => 
          [ ...a, ...combinations.map((c:any) => [variantObject, ...c])], [])
    }
    let combinations:any = getCombinations(this.selectedMaterials);
    console.log(combinations);
    combinations.forEach((combination:NewVariant[],index:number)=>{
      combinations[index] = {combination:combination,quantity:0,rate:0,total:0}
    })
    this.generatedCombinations = combinations;

  }

  publishProduct(){
    this.databaseService.updateProduct(this.draftProduct!.id, {published:true, variants:this.generatedCombinations,publishDate:new Date()}).then(()=>{
      this.dialogRef.close();
      Notify.success(
        'Published '+this.productForm.value.name + ' successfully',
        {
          zindex:99999
        }
      );
    }).catch((err)=>{
      console.log(err);
      Notify.failure('Some error occurred while publishing '+this.productForm.value.name+' product')
    })
  }

  sumVariant(variant:NewVariant[]){
    return variant.reduce((total,item)=>{return total+item.total},0)
  }
  
}
// extend material interface to add quantity
export interface SelectableMaterial{
  materials:Material[];
  name:string,
  selectedMaterial:Material|undefined;
  selectedVariants:NewVariant[],
  makingRate:number;
  perWeight:boolean;
}

export interface NewVariant extends Variant {
  quantity:number;
  total:number;
  materialName?:string;
  titleName?:string;
} 

