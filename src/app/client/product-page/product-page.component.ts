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
  @Input() jewel_name: string = 'Royal Pink Diamond Ring'
  @Input() src: string = 'ring.png'
  @Input() price: number = 14325
  @Input() liked: boolean = false
  @Input() product_Code: string = '1234HG'
  @Input() height: string = '27.44mm'
  @Input() width: string = '20.44mm'
  @Input() origin: string = 'Africa'
  @Input() weight: string = '120g'
  @Input() date: string = '14th Jul'
  @Input() pincode: number = 110001
  @Input() large_Image: string = 'assets/jewellery/ring.png'
  @Input() reviewer_Name: string = 'John Doe'
  @Input() review_Disc: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  features = [
    {
      src: 'assets/feature1.png',
      feature_Text: '100% Certified Jewellery'
    },
    {
      src: 'assets/feature2.png',
      feature_Text: '100% Certified Jewellery'
    },
    {
      src: 'assets/feature3.png',
      feature_Text: '100% Certified Jewellery'
    },
    {
      src: 'assets/feature4.png',
      feature_Text: '100% Certified Jewellery'
    },
    {
      src: 'assets/feature4.png',
      feature_Text: '100% Certified Jewellery'
    },
    {
      src: 'assets/feature4.png',
      feature_Text: '100% Certified Jewellery'
    },
    {
      src: 'assets/feature4.png',
      feature_Text: '100% Certified Jewellery'
    },
  ]
  images = [
    'assets/jewellery/ring.png',
    'assets/jewellery/goldRing.svg',
    'assets/jewellery/dimondRing.svg',
    'assets/jewellery/platinum.svg',
    'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
    // 'assets/jewellery/platinum.svg',
  ]
  reviews = [
    {
      jewel_name:'Royal Pink Diamond Ring',
      reviewer_Name: 'John Doe',
      review_Disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
    },
    {
      jewel_name:'Royal Pink Diamond Ring',
      reviewer_Name: 'John Doe',
      review_Disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
    },
    {
      jewel_name:'Royal Pink Diamond Ring',
      reviewer_Name: 'John Doe',
      review_Disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
    },
    {
      jewel_name:'Royal Pink Diamond Ring',
      reviewer_Name: 'John Doe',
      review_Disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
    },
    {
      jewel_name:'Royal Pink Diamond Ring',
      reviewer_Name: 'John Doe',
      review_Disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
    },
    {
      jewel_name:'Royal Pink Diamond Ring',
      reviewer_Name: 'John Doe',
      review_Disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
    },
    {
      jewel_name:'Royal Pink Diamond Ring',
      reviewer_Name: 'John Doe',
      review_Disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat alias officia in consequatur laborum dolore, blanditiis, officiis hic iure molestiae aspernatur non cumque at perspiciatis vel.'
    },
    
  ]
  constructor() { }
  onclick() {
    alert('Successfully added to cart')
  }
  ngOnInit(): void {
    AOS.init();
  }

}

