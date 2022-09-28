import { addDoc, deleteDoc, getDoc, getDocs } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { DataproviderService } from '../dataprovider.service';
import {
  updateDoc,
  Firestore,
  doc,
  increment,
  collection,
} from '@angular/fire/firestore';
import { urls } from '../urls';

@Injectable({
  providedIn: 'root',
})
export class DatabaseServiceService {
  constructor(
    private dataProvider: DataproviderService,
    private fs: Firestore
  ) {}

  // user collection
  public addUser(data: any) {
    return addDoc(collection(this.fs, urls.users), data);
  }

  public getDbUser(USER_ID: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);
    return getDoc(doc(this.fs, userIDUrl));
  }

  getAllUsers() {
    return getDocs(collection(this.fs, '/users'));
  }

  // edit User

  updateUser(USER_ID: any, data: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);
    return updateDoc(doc(this.fs, userIDUrl), data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // cart

  // wishlist

  userWishlist(USER_ID: any, data: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);

    return addDoc(collection(this.fs, userIDUrl + urls.wishlist), data).then(
      (res) => {}
    );
  }

  getUserWishlist(USER_ID: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);

    return getDocs(collection(this.fs, userIDUrl + urls.wishlist));
  }

  deleteWishListItem(USER_ID: any, WISHLIST_ID: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);
    const wishlistIdUrl = urls.wishlistId.replace('{WISHLIST_ID}', WISHLIST_ID);
    return deleteDoc(doc(this.fs, userIDUrl + wishlistIdUrl));
  }

  // Cart

  getUserCartList(USER_ID: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);

    return getDocs(collection(this.fs, userIDUrl + urls.cart));
  }

  userCart(USER_ID: any, data: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);
    data['productId'] = data.id;
    return addDoc(collection(this.fs, userIDUrl + urls.cart), data).then(
      async (res) => {}
    );
  }

  deleteUserCart(USER_ID: any, CART_ID: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);
    const cartIDUrl = urls.cartId.replace('{CART_ID}', CART_ID);
    return deleteDoc(doc(this.fs, userIDUrl + cartIDUrl));
  }

  // Orders

  userOrders(USER_ID: any, data: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);
    return addDoc(collection(this.fs, userIDUrl + urls.orders), data).then(
      async (res) => {}
    );
  }

  // Add Delivery addresss

  addDeliveryAddress(USER_ID: any, data: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);
    return addDoc(
      collection(this.fs, userIDUrl + urls.deliveryAddress),
      data
    ).then(async (res) => {});
  }

  getDeliveryAddress(USER_ID: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);
    return getDocs(
      collection(this.fs, userIDUrl + urls.deliveryAddress)
    ).then();
  }

  updateCartProductQuantity(
    userid: string,
    cartItemId: string,
    mode: 'increase' | 'decrease' = 'increase',
    value: number = 1
  ) {
    if (mode === 'increase') {
      return updateDoc(
        doc(this.fs, '/users/' + userid + '/cart/' + cartItemId),
        { quantity: increment(value) }
      );
    } else {
      return updateDoc(
        doc(this.fs, '/users/' + userid + '/cart/' + cartItemId),
        { quantity: increment(-value) }
      );
    }
  }

  updateWishListQuantity(
    userid: string,
    cartItemId: string,
    mode: 'increase' | 'decrease' = 'increase',
    value: number = 1
  ) {
    if (mode === 'increase') {
      return updateDoc(
        doc(this.fs, '/users/' + userid + '/wishlist/' + cartItemId),
        {
          // quantity: increment(value),
          wishlist: true,
        }
      );
    } else {
      return updateDoc(
        doc(this.fs, '/users/' + userid + '/wishlist/' + cartItemId),
        {
          // quantity: increment(-value),
          wishlist: true,
        }
      );
    }
  }
}
