import { Component, Input, OnInit, ViewChild } from '@angular/core';
 import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() orders:number = 1234

  constructor() { }


  ngOnInit(): void {
  }
  
}

