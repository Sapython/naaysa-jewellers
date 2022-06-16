import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-item',
  templateUrl: './payment-item.component.html',
  styleUrls: ['./payment-item.component.scss']
})
export class PaymentItemComponent implements OnInit {

  @Input() itemName: String="";
  @Input() imgsrc: String="";


  constructor() { }

  ngOnInit(): void {
  }

}
