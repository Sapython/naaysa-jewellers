import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import { Variant } from '../materials.component';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.scss']
})
export class AddMaterialComponent {
  variantsForm: FormGroup = new FormGroup({})
  newMaterialForm: FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),
    variants: this.variantsForm
  });
  variants: any[] = []
  units: string[] = ["gram","caret","karet"]
  constructor(private databaseService:DatabaseService,private dialogRef:DialogRef) { }
  addVariant() {
    let newVariantFormGroup = new FormGroup({
      name: new FormControl('',Validators.required),
      rate: new FormControl('',[Validators.required]),
      unit: new FormControl('',Validators.required),
    })
    this.variantsForm.addControl(this.variants.length.toString(), newVariantFormGroup)
    this.variants.push(newVariantFormGroup)
  }

  submit(){
    console.log(this.newMaterialForm.value);
    let variants = []
    for (const key in this.newMaterialForm.value.variants) {
      if (Object.prototype.hasOwnProperty.call(this.newMaterialForm.value.variants, key)) {
        const variant = this.newMaterialForm.value.variants[key];
        variants.push(variant)
      }
    }
    this.newMaterialForm.disable()
    this.newMaterialForm.value.variants = variants
    this.databaseService.addMaterial(this.newMaterialForm.value).then((material) => {
      Notify.success('Material added.');
    }).catch((error) => {
      Notify.failure('Material could not be added.');
    }).finally(() => {
      this.newMaterialForm.reset()
      this.newMaterialForm.enable()
      this.dialogRef.close(this.newMaterialForm.value)
    })
  }
}
