import { DataproviderService } from 'src/app/services/dataprovider.service';

import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { DatabaseServiceService } from 'src/app/services/database-service/database-service.service';
import { AuthService } from 'src/app/services/Auth/auth.service';


@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.scss']
})
export class PaymentTypeComponent implements OnInit {

  @Input() paymentType: string="";
  public userId:any
  @Output() selectedPaymentType: EventEmitter<any> = new EventEmitter();

  constructor(public DataproviderService: DataproviderService, public dataBaseService:DatabaseServiceService, public auth:AuthService) { }

  ngOnInit() {
    return this.auth.getUser.subscribe((res) => { this.userId = res?.uid; });
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
    this.orderGenrate()
    
  }


  orderGenrate(){
    const data = {
      products : this.DataproviderService.cartItems,
      deliveryAddress : this.DataproviderService.deliveryAddressSelected,
      paymentType:this.DataproviderService.paymentsCheck,
      paymentStatus:'processing'
    }
    this.dataBaseService.createOrders(this.userId, data)
  }

}
