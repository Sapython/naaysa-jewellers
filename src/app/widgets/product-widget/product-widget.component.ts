import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.scss']
})
export class ProductWidgetComponent implements OnInit {
  @Input() product_name:string = 'Diamond Ring'
  @Input () price:number = 125632
  @Input() info:string = 'New collection from naaysa'
  constructor() { }

  ngOnInit(): void {
  }

}
