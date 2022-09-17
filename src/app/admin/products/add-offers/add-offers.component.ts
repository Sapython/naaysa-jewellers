import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/Products/products.service';

@Component({
  selector: 'app-add-offers',
  templateUrl: './add-offers.component.html',
  styleUrls: ['./add-offers.component.scss']
})
export class AddOffersComponent implements OnInit {

  public addOfferForm:FormGroup = new FormGroup({
    offerName: new FormControl(),
    offerType: new FormControl(),
    offerAmountOff: new FormControl(),
    OfferMaxDiscount: new FormControl(),

  });

  

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }

  

  async addOffer() {
    
    if (this.addOfferForm.value) {
      this.productService.addOffers(this.addOfferForm.value).then((res) => {
        // console.log(res)
      })
    }
    alert('Product added')
  }

}
