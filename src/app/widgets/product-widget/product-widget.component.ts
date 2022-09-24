import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { collection, collectionSnapshots, Firestore } from '@angular/fire/firestore';
import * as AOS from 'aos'

import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { DatabaseServiceService } from 'src/app/services/database-service/database-service.service';
import { DataproviderService } from 'src/app/services/dataprovider.service';
import { ProductsService } from 'src/app/services/Products/products.service';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.scss']
})
export class ProductWidgetComponent implements OnInit {
  @Input() product_name: string
  @Input() src: string = 'jewellery/jewel1.svg'
  @Input() price: string = '125632'
  @Input() purity: string = '18k'
  @Input() category: string = 'Women'
  @Input() jewellery_Name: string = 'Rings'
  @Input() discount: string = '10%'
  @Input() liked: boolean = false
  @Input() navigateUrl: string
  @Input() id: string
  @Input() wishlist:Boolean = false

  @Output() addToCart: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  public userId: any
  public cartItem: any
  public cartItemId: any
  public cartItems:any
  public wishListItemId:any

  onclick() {
    alert('Your Product has Been Added To Cart')
  }


  constructor(private auth: AuthService, private fs: Firestore, private dataProvider: DataproviderService, private dataBaseService: DatabaseServiceService, private productsService: ProductsService) { }

  ngOnInit(): void {
    AOS.init();
    this.auth.getUser.subscribe(
      (res) => {
        this.userId = res?.uid;
        // this.buyNow()
      }
    )
  }

  addToCartTrigger(this: any) {
    //console.log(this)
    let data = {
      id: this.id,
      name: this.product_name,
      price: this.price,
      category: this.category,
      src: this.src,
      quantity: this.cartQuantityValue || 1,
      wishlist: this.wishlist || false,
      productId:this.id
    }
    
    this.addToCart.emit(data);
    this.cartItem = data
    this.cartItemId = data.id
    console.log(this.cartItem)
  }


  getWishListItem(this: any) {

    let data = {
      id: this.id,
      
    }
    this.delete.emit(data);
    this.wishListItemId = data
    
  }

  deleteWishListItem(){
    this.getWishListItem()
    this.auth.deleteWishListItem(this.userId, this.wishListItemId.id)
  }






  addProductCart(): void {
    this.addToCartTrigger()
    const CartValue = this.dataProvider.cartItems.find((value) => { 
      console.log(this.cartItem.productId , 'hello' , value.productId)
      return this.cartItem.productId === value.productId
     })

    if (CartValue) {
      this.dataBaseService.updateCartProductQuantity(this.userId, CartValue.id)
    }

    else {
      console.log('else')
      this.auth.userCart(this.userId, this.cartItem)
    }

  }


  addToWishlist(): void {
    this.addToCartTrigger()
    const CartValue = this.dataProvider.wishlistItems.find((value) => { 
      console.log(this.cartItem.productId , 'hello' , value.productId)
      
      return this.cartItem.productId === value.productId
     })
    
    if (CartValue) {
     
        this.getWishListItem()
        this.auth.deleteWishListItem(this.userId, this.wishListItemId.id)
      
    } 
    
    else {
      console.log("else")
      this.auth.userWishlist(this.userId, this.cartItem)
    }
  }



  // buyNow(){
  //   console.log(this.dataProvider.cartItems)
  //   this.auth.userAvailable.subscribe((value) => {
  //     collectionSnapshots(
  //       collection(this.fs, 'users/'+ value.uid + "/cart")
  //     ).subscribe((dataChange) => {
  //       this.cartItems = [];
  //       dataChange.forEach((doc: any) => {
          
  //         // this.items.push(doc.data());
  //         this.cartItems.push({...doc.data(), id:doc.id});
          
  //       });

  //       this.dataProvider.cartItems = this.cartItems;
  //       console.log( this.cartItems )
  //     });
  //   })
  // }




}
