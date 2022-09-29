import { DataproviderService } from 'src/app/services/dataprovider.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit {

  @Input() delivery_Date:string = '20 April 2022'
  @Input() disc_percentage:string = '30%'
  @Input() subtotal:string = '₹ 1,34,507'
  @Input() discount:string = '₹ 900'
  @Input() material_Price:string = '₹ 15000'
  @Input() material:string = 'Gold'
  @Input() gst:string = '₹ 800'
  @Input() tax:string = '₹ 250'
  @Input() delivery:string = '₹ 150'
  @Input() total:string = '₹ 1,34,507'
  @Input() saved:string = '₹ 500'

  onclick(){
    alert('Your Order has been Placed')
  }
  constructor(public DataProvider:DataproviderService) {
   }

  ngOnInit(): void {
    this.DataProvider.deliveryAddressSelected
  }

  selectPaymentMethoud(){
    console.log(this.DataProvider.cartItems , '', this.DataProvider.deliveryAddressSelected, '', this.DataProvider.paymentsCheck)
    this.DataProvider.paymentsCheck
  }



}
