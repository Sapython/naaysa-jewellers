import { Component, Input, OnInit } from '@angular/core';
import { collection, collectionSnapshots, Firestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { DataproviderService } from 'src/app/services/dataprovider.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList: any[] = []
  @Input() delivery_Date: string = '20 April 2022'
  @Input() disc_percentage: string = '30%'
  @Input() subtotal: string = '₹ 1,34,507'
  @Input() discount: string = '₹ 900'
  @Input() material_Price: string = '₹ 15000'
  @Input() material: string = 'Gold'
  @Input() gst: string = '₹ 800'
  @Input() tax: string = '₹ 250'
  @Input() delivery: string = '₹ 150'
  @Input() total: string = '₹ 1,34,507'
  @Input() saved: string = '₹ 500'

  userId: any;
  cartItems: any
  constructor(public auth: AuthService, public dataProvider: DataproviderService, public fs: Firestore) { }

  ngOnInit() {
    return this.auth.getUser.subscribe((res) => { this.userId = res?.uid; this.getUserCartList() })
  }


  getUserCartList() {
    return this.auth.getUserCartList(this.userId).then((res) => {
      res.forEach((element: any) => {
        this.cartList.push(
          {
            ...element.data(),
            id: element.id
          }
        )
      });
      console.log(this.cartList)
    })

  }


}
