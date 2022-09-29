import { ProductsService } from 'src/app/services/Products/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {


  offerList:any[] = [];
  constructor(private ProductService:ProductsService) { }

  ngOnInit(): void {
    this.getOffers()
  }




  getOffers() {
    return this.ProductService.getOffers().then((res) => {
      res.forEach((element: any) => {
        this.offerList.push(
          {
            ...element.data(),
            id: element.id
          }
        )
      });
      console.log(this.offerList)
    })

  }

}
