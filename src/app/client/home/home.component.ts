import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carasoles = [
    {
      id: 1,
      Image: '../../../assets/carasole1.png',
      text: 'Get the joy of Wearing Best',
    },
    {
      id: 2,
      Image: '../../../assets/carasole2.png',
      text: 'Keep Wearing Best',
    },
    {
      id: 3,
      Image: '../../../assets/carasole3.png',
      text: ' Get the first 3D Trials',
    },
  ];
  arrivals = [
    {
      id: 1,
      Image: '../../../assets/carasole2.png',
      text: 'NEW ARRIVALS',
    },
    {
      id: 2,
      Image: '../../../assets/carasole3.png',
      text: 'NEW ARRIVALS',
    },
    {
      id: 3,
      Image: '../../../assets/carasole3.png',
      text: 'NEW ARRIVALS',
    },]
    bests = [
      {
        id: 1,
        Image: '../../../assets/carasole3.png',
        text: 'Get the joy of Wearing Best',
      },
      {
        id: 2,
        Image: '../../../assets/carasole2.png',
        text: 'Keep Wearing Best',
      },
      {
        id: 3,
        Image: '../../../assets/carasole3.png',
        text: ' Get the first 3D Trials',
      },
    ]

    metals = [
      {
        id: 1,
        Image: '../../../assets/jewellery/goldRing.svg',
        text: 'Gold Ring',
      },
      {
        id: 2,
        Image: '../../../assets/jewellery/dimondRing.svg',
        text: 'Dimond Ring',
      },
      {
        id: 3,
        Image: '../../../assets/jewellery/rubby.svg',
        text: 'Gemstone Jewellery',
      },
      {
        id: 4,
        Image: '../../../assets/jewellery/platinum.svg',
        text: 'Platinum Ring',
      }
    ]
  constructor() {}

  ngOnInit(): void {}
}
