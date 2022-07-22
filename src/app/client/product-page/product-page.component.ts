import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';
interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  @Input() jewel_name:string = 'Royal Pink Diamond Ring'
  @Input() src:string = 'ring.png'
  @Input() price:number = 14325
  @Input() liked:boolean = false
  @Input() product_Code:string = '1234HG'
  @Input() height:string = '27.44mm'
  @Input() width:string = '20.44mm'
  @Input() origin:string = 'Africa'
  @Input() weight:string = '120g'
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  features = [
    {
      number:1,
      feature_Text:'100% Certified Jewellery'
    },
    {
      number:2,
      feature_Text:'100% Certified Jewellery'
    },
    {
      number:3,
      feature_Text:'100% Certified Jewellery'
    },
    {
      number:4,
      feature_Text:'100% Certified Jewellery'
    },
    {
      number:5,
      feature_Text:'100% Certified Jewellery'
    },
  ]
  constructor() { }
  onclick(){
    alert('Successfully added to cart')
  }
  ngOnInit(): void {
    AOS.init();
  }

}
