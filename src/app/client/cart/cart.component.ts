import { Component, Input, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    let cart = localStorage.getItem('cart')
    if(cart){
      this.cartItems = JSON.parse(cart)
    } else {
      this.cartItems = []
    }
  }

}
