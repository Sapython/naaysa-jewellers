import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
import * as AOS from 'aos'

declare var VanillaTilt: any;

Swiper.use([Navigation, Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  liked: boolean = false
  panelOpenState = false;


  t1 = false
  card = [
    {
      image: "../../../assets/home/Image5.jpg.png",
      h1: "Modern Jwellery",
      p: "Modern jewellery is a movement in jewellery design  that favours high personalisationand detachment of designing from its stature as a specialised job",
      button: "Necklace",
      read_more: false,

    },

    {
      image: "../../../assets/home/Image4.jpg.png",
      h1: "Modern Jwellery",
      p: "Modern jewellery is a movement in jewellery design  that favours high personalisationand detachment of designing from its stature as a specialised job",
      button: "Necklace",
      read_more: false,
    },

    {
      image: "../../../assets/home/Image4.jpg.png",
      h1: "Modern Jwellery",
      p: "Modern jewellery is a movement in jewellery design  that favours high personalisationand detachment of designing from its stature as a specialised job",
      button: "Necklace",
      read_more: false,
    },
  ]


  histories = [
    {
      lable: "New In",
      image: "../../../assets/home/511056FCDAA00.jpg.png",
      h1: "Sublimed By Flora gold Rings",
      p: "₹12,267",
    },
    {
      lable: "New In",
      image: "../../../assets/home/unsplash_-nKCbZlOHek.png",
      h1: "Sublimed By Flora gold Rings",
      p: "₹12,267",
    },
    {
      lable: "New In",
      image: "../../../assets/home/unsplash_fVeujn3i5ZE.png",
      h1: "Sublimed By Flora gold Rings",
      p: "₹12,267 ",
    },
    {
      lable: "New In",
      image: "../../../assets/home/511056FCDAA00.jpg.png",
      h1: "Sublimed By Flora gold Rings",
      p: "₹12,267",

    },
    {
      lable: "New In",
      image: "../../../assets/home/unsplash_fVeujn3i5ZE.png",
      h1: "Sublimed By Flora gold Rings",
      p: "₹12,267",
    },
    {
      lable: "New In",
      image: "../../../assets/home/unsplash_-nKCbZlOHek.png",
      h1: "Sublimed By Flora gold Rings",
      p: "₹12,267",
    },




  ]

  products: any[] = [
    {
      name: 'Royal Pink Diamond Ring',
      price: 14325,
      category: 'ring',
      liked: true,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam rem eum tenetur quidem quaerat',
      tag: 'New In',
      metalPurityTypes: [
        {
          purity: '18K',
        },
        {
          purity: '22K',
        },
        {
          purity: '24K',
        },
      ],
      diamondTypes: [
        {
          name: '22 C',
        },
        {
          name: '24 C',
        },
        {
          name: '26 C',
        },
      ],
      sizeTypes: [
        {
          size: '18',
        },
        {
          size: '20',
        },
        {
          size: '22',
        },
      ],
      images: [
        'assets/topBarImages/earings/ear (1).png',
        'assets/topBarImages/earings/ear (6).png',
        'assets/topBarImages/earings/ear (3).png',
        'assets/topBarImages/earings/ear (4).png',
        'assets/topBarImages/earings/ear (5).png',
      ],
      certifications: [
        {
          name: 'bis',
          image: 'assets/badges/badge (1).png'
        },
        {
          name: 'bis',
          image: 'assets/badges/badge (2).png'
        },
        {
          name: 'bis',
          image: 'assets/badges/badge (3).png'
        },
      ]
    }
  ]




  public swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  constructor() { }

  ngOnInit(): void {
    AOS.init();
    console.log(VanillaTilt.init());

  }
}
