import { Component, OnInit } from '@angular/core';
declare var UIkit:any;
import { HostListener } from '@angular/core';
@HostListener('window:scroll', ['$event'])
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleSearch: boolean = false;
  path:string = window.location.pathname;
  constructor() { }
  ngOnInit(): void {
    var element = document.getElementById('hover');
    console.log(element);
    console.log(UIkit.dropdown(element))
    UIkit.dropdown(element).delayHide = 0;
    console.log("Paths",this.path)
    
  }
  
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('scroll');
      console.log('add');
    } else {
      element.classList.remove('scroll');
      console.log('remove');
    }
  }
}
