import { addDoc } from 'firebase/firestore';
import { Injectable } from '@angular/core';
import { DataproviderService } from '../dataprovider.service';
import { updateDoc, Firestore, doc, increment, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {



  constructor(private dataProvider: DataproviderService, private fs: Firestore) { }

  updateCartProductQuantity(userid: string, cartItemId: string, mode: 'increase' | 'decrease' = 'increase', value: number = 1) {

    if (mode === 'increase') {
      return updateDoc(doc(this.fs, '/users/' + userid + '/cart/' + cartItemId), { quantity: increment(value) })
    }
    else  {
      return updateDoc(doc(this.fs, '/users/' + userid + '/cart/' + cartItemId), { quantity: increment(-value) })
    }

  }


  updateWishListQuantity(userid: string, cartItemId: string, mode: 'increase' | 'decrease' = 'increase', value: number = 1) {

    if (mode === 'increase') {
      return updateDoc(doc(this.fs, '/users/' + userid + '/wishlist/' + cartItemId), { 
        // quantity: increment(value),
        wishlist: true 
      })
    }
    else  {
      return updateDoc(doc(this.fs, '/users/' + userid + '/wishlist/' + cartItemId), { 
        // quantity: increment(-value),
        wishlist: true
      })
    }

  }
}
