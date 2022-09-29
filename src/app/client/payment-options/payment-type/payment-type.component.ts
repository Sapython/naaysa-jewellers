import { DataproviderService } from 'src/app/services/dataprovider.service';

import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.scss']
})
export class PaymentTypeComponent implements OnInit {

  @Input() paymentType: string="";

  @Output() selectedPaymentType: EventEmitter<any> = new EventEmitter();

  constructor(public DataproviderService: DataproviderService) { }

  ngOnInit(): void {
  }

  selectedPayment(this: any) {
    //console.log(this)
    let data = {
      paymentType: this.paymentType,
      
    }
    
    this.selectedPaymentType.emit(data);
    this.selectedPaymentType = data
    this.DataproviderService.paymentsCheck = this.selectedPaymentType

    console.log(this.DataproviderService.cartItems)
    console.log(this.DataproviderService.deliveryAddressSelected)
    console.log(this.DataproviderService.paymentsCheck)


    // console.log(this.selectedPaymentType)
  }

}
