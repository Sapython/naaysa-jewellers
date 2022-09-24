import { docData } from '@angular/fire/firestore';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { DataproviderService } from 'src/app/services/dataprovider.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public userId: any;
  public wishListItemId:any
  public UserWishlist: any[] = [];
  @Output() deleted: EventEmitter<any> = new EventEmitter();

  constructor(public dataProvider: DataproviderService, public auth: AuthService) { }

  ngOnInit() {
    this.auth.getUser.subscribe((res) => { this.userId = res?.uid; })
  }


  getWishListItem(this: any) {

    let data = {
      id: this.id,
      
    }
    this.deleted.emit(data);
    this.cartId = data
    console.log(data)
    this.deleteCartItem()
  }

  deleteWishListItem(){
    this.auth.deleteWishListItem(this.userId, this.wishListItemId)
  }



}
