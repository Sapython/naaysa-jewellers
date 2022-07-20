import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  @Input() balance:number = 898300
  @Input() user:number = 3500
  @Input() email:string = 'arunarora1025@gmail.com'
  @Input() name:string = 'Arun Arora'
  @Input() contact:number = 9919256789
  @Input() wallet_Balance:number = 12000
  @Input() member_Since:string = "06/04/2022"
  
  items = [
    {
      balance:898300,
      user:3500,
      email:'arunarora1025@gmail.com',
      name:'Arun Arora',
      contact:9919256789,
      wallet_Balance:12000,
      member_Since:"06/04/2022",
    },
    {
      balance:898300,
      user:3500,
      email:'arunarora1025@gmail.com',
      name:'Arun Arora',
      contact:9919256789,
      wallet_Balance:12000,
      member_Since:"06/04/2022",
    },
    {
      balance:898300,
      user:3500,
      email:'arunarora1025@gmail.com',
      name:'Arun Arora',
      contact:9919256789,
      wallet_Balance:12000,
      member_Since:"06/04/2022",
    },
    {
      balance:898300,
      user:3500,
      email:'arunarora1025@gmail.com',
      name:'Arun Arora',
      contact:9919256789,
      wallet_Balance:12000,
      member_Since:"06/04/2022",
    },
    {
      balance:898300,
      user:3500,
      email:'arunarora1025@gmail.com',
      name:'Arun Arora',
      contact:9919256789,
      wallet_Balance:12000,
      member_Since:"06/04/2022",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
