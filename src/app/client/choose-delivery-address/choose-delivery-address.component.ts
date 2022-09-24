import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { DataproviderService } from 'src/app/services/dataprovider.service';

@Component({
  selector: 'app-choose-delivery-address',
  templateUrl: './choose-delivery-address.component.html',
  styleUrls: ['./choose-delivery-address.component.scss']
})
export class ChooseDeliveryAddressComponent implements OnInit {


  @Input() selectedAddress:any

  // @Output() selectedAddress: EventEmitter<any> = new EventEmitter();



  userId: any;
  deliveryAddressItems: any[] = []
  constructor(public auth: AuthService, public dataProvider: DataproviderService, public fs: Firestore) { }

  ngOnInit() {
    return this.auth.getUser.subscribe((res) => { this.userId = res?.uid; this.getDeliveryAddress() })
  }


  getDeliveryAddress() {
    return this.auth.getDeliveryAddress(this.userId).then((res) => {
      res.forEach((element: any) => {
        this.deliveryAddressItems.push(
          {
            ...element.data(),
            id: element.id
          }
        )
      });
      console.log(this.deliveryAddressItems)
    })

  }

  // selectDeliveryAddress(this: any) {
  //   //console.log(this)
  //   let data = {
  //     name: this.name,
  //     address: this.address,
  //     phoneNumber: this.phoneNumber,
  //     pinCode: this.pinCode,
  //     state: this.state,
  //     city: this.city,
  //     houseNo: this.houseNo,
  //   }
    
  //   this.selectedAddress.emit(data);
  //   this.selectedAddress = data

  //   console.log(this.selectedAddress)
  // }




}
