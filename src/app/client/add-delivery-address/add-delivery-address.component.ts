import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { DatabaseServiceService } from 'src/app/services/database-service/database-service.service';
import { DataproviderService } from 'src/app/services/dataprovider.service';

@Component({
  selector: 'app-add-delivery-address',
  templateUrl: './add-delivery-address.component.html',
  styleUrls: ['./add-delivery-address.component.scss']
})
export class AddDeliveryAddressComponent implements OnInit {

  public userId: any
  public cartItem: any
  public cartItemId: any
  public cartItems:any

  public addDeliveryAddressForm: FormGroup = new FormGroup({
    name: new FormControl(),
    pinCode: new FormControl(),
    phoneNumber: new FormControl(),
    address: new FormControl(),
    state: new FormControl(),
    city: new FormControl(),
    houseNo:new FormControl(),

  });
  ;

  constructor(private auth:AuthService, public dataProvider:DataproviderService, private dataBaseService: DatabaseServiceService) { }


  ngOnInit(): void {
    this.auth.getUser.subscribe( (res) => { this.userId = res?.uid })
  }

  addDeliveryAddress(){
    this.dataBaseService.addDeliveryAddress(this.userId, this.addDeliveryAddressForm.value).then((res)=>{console.log(res)})
  }
}
