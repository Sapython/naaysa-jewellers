import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplyCouponComponent } from '../apply-coupon/apply-coupon.component';
import { PincodeComponent } from './pincode/pincode.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

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
  cartItems:any[] = []
  constructor(private dialogModule: MatDialog) { }

  ngOnInit(): void {
    let cart = localStorage.getItem('cart')
    // if(cart){
    //   this.cartItems = JSON.parse(cart)
    // } else {
    //   this.cartItems = []
    // }
    this.cartItems = [{
    id:1,
    name:"Ripple Cluster Daimond Stud",
    no:"JE032328-WGP900",
    src:"../../../assets/CART/BISJ0005R08-POSTER-4597.jpg.png",
    price: "14,174",
    stock: "Only 1 piece left",
    quantity : "1",
    date:"20 April 2022",
    save:"₹2,350",
    count: "1",
    totalprice:"₹ 10,000",
  },{
    id:2,
    name:"Ripple Cluster Daimond Stud",
    no:"JE032328-WGP900",
    src:"../../../assets/CART/BISJ0005R08-POSTER-4597.jpg.png",
    price: "14,174",
    stock: "Only 1 piece left",
    date:"20 April 2022",
    save:"₹ 2,350",
    count: "1",
    quantity : "1",
    totalprice:"₹ 10,000",
  }]
  console.log(this.cartItems)
  }
  applyCoupon(){
      this.dialogModule.open(ApplyCouponComponent)
  }
  openPincode(){
    this.dialogModule.open(PincodeComponent)
  }
}