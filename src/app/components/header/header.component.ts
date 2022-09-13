import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var UIkit: any;
import { HostListener } from '@angular/core';
import { ProductsService } from 'src/app/services/Products/products.service';
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
  searchVisible: boolean = false;

  byCategory: any[] = [
    // {
    //   image:'../../../assets/jewellery/jew1.svg',
    //   name:'Gold coins'
    // },

    // {
    //   image:'../../../assets/jewellery/jew5.svg',
    //   name:'Gold coins'
    // },
    // {
    //   image:'../../../assets/jewellery/jew6.svg',
    //   name:'Gold coins'
    // },
    // {
    //   image:'../../../assets/jewellery/jew2.svg',
    //   name:'Gold coins'
    // },
    // {
    //   image:'../../../assets/jewellery/jew8.svg',
    //   name:'Gold coins'
    // },
    // {
    //   image:'../../../assets/jewellery/jew1.svg',
    //   name:'Gold coins'
    // },
    // {
    //   image:'../../../assets/jewellery/jew.3.svg',
    //   name:'Gold coins'
    // },
    // {
    //   image:'../../../assets/jewellery/jew2.svg',
    //   name:'Gold coins'
    // },
    // {
    //   image:'../../../assets/jewellery/jew5.svg',
    //   name:'Gold coins'
    // },
    // {
    //   image:'../../../assets/jewellery/jew1.svg',
    //   name:'Gold coins'
    // },
    // {
    //   image:'../../../assets/jewellery/jew2.svg',
    //   name:'Gold coins'
    // },
    // {
    //   image:'../../../assets/jewellery/jew8.svg',
    //   name:'Gold coins'
    // }
  ]
  byMetals = [
    {
      image: '../../../assets/metals/metal1.svg',
      name: 'Diamond'
    },
    {
      image: '../../../assets//metals/metal2.svg',
      name: 'Gold '
    },
    {
      image: '../../../assets/metals/metal.svg',
      name: 'Silver'
    },
    {
      image: '../../../assets/metals/gemstone.svg',
      name: 'Gemstone'
    },

  ]
  filters: any[] = [
    // {
    //   name: 'For KIDS/BABY'
    // },
    // {
    //   name: 'Under ₹ 10k'
    // },
    // {
    //   name: '₹ 10k - ₹ 20k '
    // },
    // {
    //   name: ' ₹ 20k to ₹ 75K '
    // },
    // {
    //   name: '₹ 75k to ₹ 1 LAKH'
    // },
    // {
    //   name: 'Above ₹ 1 LAKH'
    // },
    // {
    //   name: 'FOR WOMEN'
    // },
  ]
  constructor(private products: ProductsService) { }

  ngOnInit(): void {

    this.getProductsCategory();
    this.getPriceRange()
  }

  async getProductsCategory() {
    const res: any = await this.products.getCategories()
    //  this.byCategory = Array.from(res).map((element:any) => {
    //     return {
    //       ...element.data(),
    //       id:element.id
    //     }
    //   });
    res.forEach((element: any) => {
      this.byCategory.push(
        {
          ...element.data(),
          id: element.id
        }
      )


    });
  }

  async getPriceRange() {
    const res: any = await this.products.getPriceRange()
    res.forEach((element: any) => {
      this.filters.push(
        {
          ...element.data(),
          id: element.id
        }
        )
    });
    console.log(this.filters)
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
  showMenu() {

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
