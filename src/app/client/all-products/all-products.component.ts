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
      name: 'Royal Pink Diamond Ring',
      price: 14325,
      category:'ring',
      liked:true,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat',
      metalPurityTypes:[
        {
          purity:'18K',
        },
        {
          purity:'22K',
        },
        {
          purity:'24K',
        },
      ],
      diamondTypes:[
        {
          name:'22 C',
        },
        {
          name:'24 C',
        },
        {
          name:'26 C',
        },
      ],
      sizeTypes:[
        {
          size:'18',
        },
        {
          size:'20',
        },
        {
          size:'22',
        },
      ],
      images:[
        'assets/topBarImages/earings/ear (1).png',
        'assets/topBarImages/earings/ear (6).png',
        'assets/topBarImages/earings/ear (3).png',
        'assets/topBarImages/earings/ear (4).png',
        'assets/topBarImages/earings/ear (5).png',
      ],
      certifications:[
        {
          name:'bis',
          image:'assets/badges/badge (1).png'
        },
        {
          name:'bis',
          image:'assets/badges/badge (2).png'
        },
        {
          name:'bis',
          image:'assets/badges/badge (3).png'
        },
      ]
    }
  ]

}
