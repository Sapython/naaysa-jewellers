import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.scss']
})
export class ProductWidgetComponent implements OnInit {
  @Input() product_name:string = 'Diamond Ring'
  @Input() src:string = 'assets\BIRS0279R20-POSTER-11100.jpg.png'
  @Input() price:number = 125632
  @Input() purity:string = '18k'
  @Input() category:string = 'Women'
  @Input() jewellery_Name:string = 'Rings'
  @Input() discount:string = '10%'
  @Input() liked:boolean = false
  @Input() tag:string

  isLoaded: boolean = false;
  
  onclick(){
    alert('Your Product has Been Added To Cart')
  }
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
