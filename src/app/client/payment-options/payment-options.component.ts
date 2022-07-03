import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit {

  onclick(){
    alert('Your Order has been Placed')
  }
  constructor() {
   }

  ngOnInit(): void {
  }

}
