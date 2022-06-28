import { Component, OnInit } from '@angular/core';
declare var UIkit:any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var element = document.getElementById('hover');
    console.log(element);
    console.log(UIkit.dropdown(element))
    UIkit.dropdown(element).delayHide = 0;
  }

}
