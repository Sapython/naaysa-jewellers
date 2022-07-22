import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-locate-store',
  templateUrl: './locate-store.component.html',
  styleUrls: ['./locate-store.component.scss']
})
export class LocateStoreComponent implements OnInit {

  @Input() store_Timing:string = '11:30 AM to 9:00PM'
  @Input() store_Address:string = '36 B MG marg Subhash Chauraha, near raj karan palace, Civil Lines'
  @Input() store_Number:string = '+91-991965489'

  constructor() { }

  ngOnInit(): void {
  }

}
