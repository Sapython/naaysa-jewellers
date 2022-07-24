import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  active = true;
  constructor() { }
  ngOnInit(): void {
  }
  toggleActive(){
    this.active = !this.active;
  }

}
