import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-added-item',
  templateUrl: './cart-added-item.component.html',
  styleUrls: ['./cart-added-item.component.scss']
})
export class CartAddedItemComponent implements OnInit {

  @Input() imgsrc: String="";
  @Input() item_name: String="";
  @Input() item_price: String="";
  @Input() stock: String="";
  @Input() item_count: String="";
  @Input() total_price: String="";
  
  constructor() { }

  ngOnInit(): void {
  }

}
