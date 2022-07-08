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
  @Input() info:string = 'New collection from naaysa'
  @Input() liked:boolean = false
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
