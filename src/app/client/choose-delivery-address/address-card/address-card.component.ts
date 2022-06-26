import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent implements OnInit {

  @Input() name:String="";
  @Input() address_type:String="";
  @Input() number:String="";
  @Input() address:String="";

  constructor() { }

  ngOnInit(): void {
  }

}
