import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { DatabaseServiceService } from 'src/app/services/database-service/database-service.service';
import { DataproviderService } from 'src/app/services/dataprovider.service';

@Component({
  selector: 'app-choose-delivery-address',
  templateUrl: './choose-delivery-address.component.html',
  styleUrls: ['./choose-delivery-address.component.scss']
})
export class ChooseDeliveryAddressComponent implements OnInit {
  @Input() selectedAddress:any
  userId: any;
  deliveryAddressItems: any[] = []
  constructor(public auth: AuthService, public dataProvider: DataproviderService, public fs: Firestore,private databaseService:DatabaseServiceService) { }

  ngOnInit() {
    return this.auth.getUser.subscribe((res) => { this.userId = res?.uid; this.getDeliveryAddress() })
  }

  getDeliveryAddress() {
    return this.databaseService.getDeliveryAddress(this.userId).then((res) => {
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
}
