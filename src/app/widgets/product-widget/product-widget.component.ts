import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.scss']
})
export class ProductWidgetComponent implements OnInit {
  @Input() product_name:string = 'Diamond Ring'
  @Input() src:string = 'jewellery/jewel1.svg'
  @Input () price:number = 125632
  @Input() purity:string = '18k'
  @Input() category:string = 'Women'
  @Input() jewellery_Name:string = 'Rings'
  @Input() discount:string = '10%'
  @Input() liked:boolean = false

  onclick(){
    alert('Your Product has Been Added To Cart')
  }
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
