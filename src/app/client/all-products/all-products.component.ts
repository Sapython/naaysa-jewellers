import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products:any[] = [
    {
      name: 'Nagla Inspired Ring',
      src: 'assets/ring1.png',
      price: 12500,
      purity: '18k',
      category:'Diamond',
      jewellery_Name: 'Rings',
      discount: '10%',
      liked: false
    },
    {
      name: 'Nagla Inspired Ring',
      src: 'assets/ring1.png',
      price: 12500,
      purity: '18k',
      category:'Diamond',
      jewellery_Name: 'Rings',
      discount: '10%',
      liked: false
    },
    {
      name: 'Nagla Inspired Ring',
      src: 'assets/ring1.png',
      price: 12500,
      purity: '18k',
      category:'Diamond',
      jewellery_Name: 'Rings',
      discount: '10%',
      liked: false
    },
    {
      name: 'Nagla Inspired Ring',
      src: 'assets/ring1.png',
      price: 12500,
      purity: '18k',
      category:'Diamond',
      jewellery_Name: 'Rings',
      discount: '10%',
      liked: false
    },
    {
      name: 'Nagla Inspired Ring',
      src: 'assets/ring1.png',
      price: 12500,
      purity: '18k',
      category:'Diamond',
      jewellery_Name: 'Rings',
      discount: '10%',
      liked: false
    },
    {
      name: 'Nagla Inspired Ring',
      src: 'assets/ring1.png',
      price: 12500,
      purity: '18k',
      category:'Diamond',
      jewellery_Name: 'Rings',
      discount: '10%',
      liked: false
    },
    {
      name: 'Nagla Inspired Ring',
      src: 'assets/ring1.png',
      price: 12500,
      purity: '18k',
      category:'Diamond',
      jewellery_Name: 'Rings',
      discount: '10%',
      liked: false
    },
    {
      name: 'Nagla Inspired Ring',
      src: 'assets/ring1.png',
      price: 12500,
      purity: '18k',
      category:'Diamond',
      jewellery_Name: 'Rings',
      discount: '10%',
      liked: false
    },
    {
      name: 'Nagla Inspired Ring',
      src: 'assets/ring1.png',
      price: 12500,
      purity: '18k',
      category:'Diamond',
      jewellery_Name: 'Rings',
      discount: '10%',
      liked: false
    },
  ]

}
