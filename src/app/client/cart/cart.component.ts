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
  constructor() { }

  ngOnInit(): void {
  }

}
