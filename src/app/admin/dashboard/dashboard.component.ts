import { Component, Input, OnInit, ViewChild } from '@angular/core';
 import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() orders: number = 1234
  @Input() product_Name: string = 'Product'
  @Input() product_Id: string = '12345678912'
  @Input() sold_Number: number = 14
  @Input() returned_Number: number = 14
  @Input() material: string = 'Diamond'
  @Input() weight: string = '5.56 grams'
  @Input() price: string = '₹30,000'
  @Input() src: string = 'assets/'

  items = [
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      sold_Number: 14,
      returned_Number: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      price: '₹30,000',
      src: 'assets/'
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      sold_Number: 14,
      returned_Number: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      price: '₹30,000',
      src: 'assets/'
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      sold_Number: 14,
      returned_Number: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      price: '₹30,000',
      src: 'assets/'
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      sold_Number: 14,
      returned_Number: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      price: '₹30,000',
      src: 'assets/'
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      sold_Number: 14,
      returned_Number: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      price: '₹30,000',
      src: 'assets/'
    },
    {
      product_Name: 'Product',
      product_Id: '12345678912',
      sold_Number: 14,
      returned_Number: 14,
      material: 'Diamond',
      weight: '5.56 grams',
      price: '₹30,000',
      src: 'assets/'
    },
  ]
  features = [
    {
      feature_Name:'Add Product'
    },
    {
      feature_Name:'Add Vendor'
    },
    {
      feature_Name:'Category'
    },
    {
      feature_Name:'Add Vendor'
    },
  ]
  constructor() { }


  ngOnInit(): void {
  }

}

