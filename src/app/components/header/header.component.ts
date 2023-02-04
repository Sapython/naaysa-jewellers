import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var UIkit: any;
import { HostListener } from '@angular/core';
@HostListener('window:scroll', ['$event'])
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  path: string = window.location.pathname;
  windowWidth: number = window.innerWidth;
  @ViewChild('nav') nav: ElementRef;
  @ViewChild('searchButton') searchButton: ElementRef;
  @ViewChild('searchBox') searchBox: ElementRef;
  @ViewChild('offcanvasContainer') offcanvasContainer: ElementRef;
  @ViewChild('offcanvas') offcanvas: ElementRef;
  searchVisible:boolean = false;

  topBarItems:TopBarItem[] = [
    {
      banner:'assets/topBarImages/rings/banner.png',
      title:'Rings',
      styles:[
        {image:'assets/topBarImages/rings/1.png',title:'Engagement',link:'/'},
        {image:'assets/topBarImages/rings/2.png',title:'Wedding',link:'/'},
        {image:'assets/topBarImages/rings/3.png',title:'Anniversary',link:'/'},
        {image:'assets/topBarImages/rings/4.png',title:'Bridal',link:'/'},
        {image:'assets/topBarImages/rings/5.png',title:'Fashion',link:'/'},
        {image:'assets/topBarImages/rings/6.png',title:'Eternity',link:'/'},
        {image:'assets/topBarImages/rings/7.png',title:'Stackable',link:'/'},
      ],
      byMetals:[
        {image:'assets/topBarImages/secondCategories/diamond.png',title:'Diamond',link:'/'},
        {image:'assets/topBarImages/secondCategories/gemstone.png',title:'Gemstone',link:'/'},
        {image:'assets/topBarImages/secondCategories/solitaire.png',title:'Solitaire',link:'/'},
        {image:'assets/topBarImages/secondCategories/rose gold.png',title:'Rose Gold',link:'/'},
        {image:'assets/topBarImages/secondCategories/gold.png',title:'Gold',link:'/'},
        {image:'assets/topBarImages/secondCategories/white gold.png',title:'White Gold',link:'/'},
        {image:'assets/topBarImages/secondCategories/yellow gold.png',title:'Yellow Gold',link:'/'},
      ],
      shopBy:[
        {title:'For Mens',link:'/'},
        {title:'For Womens',link:'/'},
        {title:'Under 10K',link:'/'},
        {title:'10K to 20K',link:'/'},
        {title:'20K to 30K',link:'/'},
        {title:'30K to 45K',link:'/'},
        {title:'Above 45K',link:'/'},
        {title:'Show All',link:'/'},
      ]
    },

  ]
  constructor() {}

  ngOnInit(): void {}
  setStyle(dropdown:any){
    console.log(dropdown);
    // dropdown.style.left = '30px;';
    // dropdown.addEventListener('beforeshow',(data:any)=>{
    //   console.log("before show",data);
    //   dropdown.left = '30px;';
    // })
  }
  showSearch() {
    this.nav.nativeElement.setAttribute('closed', '');
    this.nav.nativeElement.addEventListener(
      'animationend',
      () => {
        this.nav.nativeElement.style.display = 'none';
        this.nav.nativeElement.removeAttribute('shown');
        this.searchBox.nativeElement.style.display = 'flex';
        this.searchBox.nativeElement.setAttribute('shown', '');
        this.searchBox.nativeElement.removeAttribute('closed');
      },
      {
        once: true,
      }
    );

    this.searchButton.nativeElement.setAttribute('closed', '');
    this.searchButton.nativeElement.addEventListener(
      'animationend',
      () => {
        this.searchButton.nativeElement.style.display = 'none';
        this.searchButton.nativeElement.removeAttribute('shown');
      },
      {
        once: true,
      }
    );
  }
  showMenu(){

}  

hideSearch() {
    this.searchBox.nativeElement.setAttribute('closed', '');
    this.searchBox.nativeElement.addEventListener(
      'animationend',
      () => {
        this.searchBox.nativeElement.style.display = 'none';
        this.searchBox.nativeElement.removeAttribute('shown');

        this.nav.nativeElement.style.display = 'flex';
        this.nav.nativeElement.setAttribute('shown', '');
        this.nav.nativeElement.removeAttribute('closed');
      },
      {
        once: true,
      }
    );

    this.searchButton.nativeElement.style.display = 'block';
    this.searchButton.nativeElement.setAttribute('shown', '');
    this.searchButton.nativeElement.removeAttribute('closed');
  }

  showOffcanvas() {
    this.offcanvasContainer.nativeElement.style.display = 'block';
    this.offcanvasContainer.nativeElement.removeAttribute('closed', '');
    this.offcanvasContainer.nativeElement.setAttribute('shown', '');

    this.offcanvas.nativeElement.style.display = 'block';
    this.offcanvas.nativeElement.removeAttribute('closed');
    this.offcanvas.nativeElement.setAttribute('shown', '');
  }

  hideOffcanvas(event: Event) {
    if ((event.target as HTMLElement)['id'] == 'offcanvas-container') {
    }

    this.offcanvasContainer.nativeElement.removeAttribute('shown');
    this.offcanvasContainer.nativeElement.setAttribute('closed', '');
    this.offcanvasContainer.nativeElement.addEventListener(
      'animationend',
      () => {
        this.offcanvasContainer.nativeElement.style.display = 'none';
      },
      {
        once: true,
      }
    );

    this.offcanvas.nativeElement.removeAttribute('shown');
    this.offcanvas.nativeElement.setAttribute('closed', '');
    this.offcanvas.nativeElement.addEventListener(
      'animationend',
      () => {
        this.offcanvas.nativeElement.style.display = 'none';
      },
      {
        once: true,
      }
    );
  }
}

type TopBarItem = {
  title:string,
  banner:string,
  styles:{image:string,title:string,link:string}[],
  byMetals:{image:string,title:string,link:string}[],
  shopBy:{title:string,link:string}[]
}