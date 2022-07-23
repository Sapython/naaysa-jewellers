import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products:any[] = [
    {
      imgsrc:"https://pluspng.com/img-png/jewelry-images-png-hd-gold-rings-png-hd-1000.png",
      item_name:"Golden Ring",
      item_price:"2000",
      stock:"in stock",
      item_count:"3",
      total_price:"6000",
    },
    {
      imgsrc:"https://pluspng.com/img-png/jewelry-images-png-hd-gold-rings-png-hd-1000.png",
      item_name:"Golden Ring",
      item_price:"2000",
      stock:"in stock",
      item_count:"3",
      total_price:"6000",
    },
    {
      imgsrc:"https://pluspng.com/img-png/jewelry-images-png-hd-gold-rings-png-hd-1000.png",
      item_name:"Golden Ring",
      item_price:"2000",
      stock:"in stock",
      item_count:"3",
      total_price:"6000",
    },
    {
      imgsrc:"https://pluspng.com/img-png/jewelry-images-png-hd-gold-rings-png-hd-1000.png",
      item_name:"Golden Ring",
      item_price:"2000",
      stock:"in stock",
      item_count:"3",
      total_price:"6000",
    },
    {
      imgsrc:"https://pluspng.com/img-png/jewelry-images-png-hd-gold-rings-png-hd-1000.png",
      item_name:"Golden Ring",
      item_price:"2000",
      stock:"in stock",
      item_count:"3",
      total_price:"6000",
    },
    {
      imgsrc:"https://pluspng.com/img-png/jewelry-images-png-hd-gold-rings-png-hd-1000.png",
      item_name:"Golden Ring",
      item_price:"2000",
      stock:"in stock",
      item_count:"3",
      total_price:"6000",
    },
    
  ]
  @Input() delivery_Date:string = '20 April 2022'
  @Input() disc_percentage:string = '30%'
  @Input() subtotal:string = '₹ 1,34,507'
  @Input() discount:string = '₹ 1,34,507'
  @Input() material_Price:string = '₹ 1,34,507'
  @Input() material:string = 'Gold'
  @Input() gst:string = '₹ 1,34,507'
  @Input() tax:string = '₹ 1,34,507'
  @Input() delivery:string = '₹ 1,34,507'
  @Input() total:string = '₹ 1,34,507'
  constructor() { }

  ngOnInit(): void {
  }

}
