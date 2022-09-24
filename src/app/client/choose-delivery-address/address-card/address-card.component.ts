import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { DatabaseServiceService } from 'src/app/services/database-service/database-service.service';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent implements OnInit {

  @Input() name:String="JOHN";
  @Input() address_type:String="Work";
  @Input() address:String="10880 Malibu Point, 90265 CA 90265, USA";
  @Input() phoneNumber:String="+31 525-551-555";
  @Input() pinCode:String="+31 525-551-555";
  @Input() state:String="+31 525-551-555";
  @Input() city:String="+31 525-551-555";
  @Input() houseNo:String="+31 525-551-555";
  // @Input() selectedAddress:any
  @Output() selectedAddress: EventEmitter<any> = new EventEmitter();
  


  public userId: any
  public selectDeliveryAddressList: any
  public cartItemId: any
  public cartItems:any

  

  constructor(private auth:AuthService, public dataProvider:DatabaseServiceService, private dataBaseService: DatabaseServiceService) { }


  ngOnInit(): void {}

  selectDeliveryAddress(this: any) {
      //console.log(this)
      let data = {
        name: this.name,
        address: this.address,
        phoneNumber: this.phoneNumber,
        pinCode: this.pinCode,
        state: this.state,
        city: this.city,
        houseNo: this.houseNo,
      }
      
      this.selectedAddress.emit(data);
      // this.selectedAddress = data
      this.dataProvider.deliveryAddressSelected = data
      

      console.log(this.dataProvider.deliveryAddressSelected)
    }


  

  addDeliveryAddress(){

  }


  

}
