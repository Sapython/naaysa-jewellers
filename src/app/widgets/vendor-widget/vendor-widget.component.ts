import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-widget',
  templateUrl: './vendor-widget.component.html',
  styleUrls: ['./vendor-widget.component.scss']
})
export class VendorWidgetComponent implements OnInit {
  @Input() vendor_name:string; 
  @Input() vendor_id:string;
  @Input() vendorImg:string;
  @Input() vendorEmail:string;


  constructor() { }

  ngOnInit(): void {
  }

}
