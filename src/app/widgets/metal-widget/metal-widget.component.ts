import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metal-widget',
  templateUrl: './metal-widget.component.html',
  styleUrls: ['./metal-widget.component.scss']
})
export class MetalWidgetComponent implements OnInit {

  @Input() metal:string = 'Diamond'
  @Input() info:string = 'Rings, 4.58gm, 22 KT-Bound To You Diamond Rings-...'
  @Input() price:Number = 580825

  constructor() { }

  ngOnInit(): void {
  }

}
