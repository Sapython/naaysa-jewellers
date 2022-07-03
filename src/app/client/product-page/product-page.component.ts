import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  @Input() jewel_name:string = 'Royal Pink Diamond Ring'
  @Input() price:number = 1432564
  @Input() discription:string = 'ME57_18 Stainless Steel Titanium,Graceful Oxidised Rings Combo for Women Alloy Rhodium Plated Ring'
  constructor() { }
  onclick(){
    alert('Successfully added to cart')
  }
  ngOnInit(): void {
  }

}
