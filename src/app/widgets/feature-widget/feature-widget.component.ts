import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-widget',
  templateUrl: './feature-widget.component.html',
  styleUrls: ['./feature-widget.component.scss']
})
export class FeatureWidgetComponent implements OnInit {

  @Input() text_Feature:string = '100% Certified Jewellery'
  @Input() number:number = 1

  constructor() { }

  ngOnInit(): void {
  }

}
