import { Component} from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-apply-coupon',
  templateUrl: './apply-coupon.component.html',
  styleUrls: ['./apply-coupon.component.scss']
})
export class ApplyCouponComponent {
  // avaliableCoupons: any= {}
  avaliableCoupons: any = [{
    maximumDiscount: '3',
    offerCode:'Naayasa 3',
    offerType: '',
    usage:'',
    offerCost: '',
    minPrice: '2 lakh',
    minProducts: '',
    offerName: 'Emerald Studded jewellery'
  },
  {
    maximumDiscount: '15',
    offerCode:'Naayasa 22',
    offerType: '',
    usage:'',
    offerCost: '',
    minPrice: '1 lakh',
    minProducts: '',
    offerName: 'Diamond Studded jewellery'
  }]

  constructor(private dialogRef: DialogRef) {}

   onClose(){
      this.dialogRef.close();
   }
}
