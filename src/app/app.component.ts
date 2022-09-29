import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  collection,
  collectionChanges,
  collectionSnapshots,
  Firestore,
} from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { AuthService } from './services/Auth/auth.service';
import { DataproviderService } from './services/dataprovider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title: 'naysaa ';

  itemListSubscription: Subscription = Subscription.EMPTY;
  constructor(
    private firestore: Firestore,
    private auth: AuthService,
    private dataProvider: DataproviderService
  ) {}

  ngOnInit() {
    this.auth.userAvailable.subscribe((value) => {
      
      collectionSnapshots(
        collection(this.firestore, 'users/' + value.uid + '/cart')
      ).subscribe((dataChange) => {
        console.log("Started listening to cart changes");
        let items:any = [];
        dataChange.forEach((doc: any) => {
          // this.items.push(doc.data());
          items.push({ ...doc.data(), id: doc.id });
        });
        this.dataProvider.cartItems = items;
        console.log("CartItems",items);
      });

      collectionSnapshots(
        collection(this.firestore, 'users/' + value.uid + '/wishlist')
      ).subscribe((dataChange) => {
        console.log("Started listening to wishlist changes");
        var items:any[] = [];
        dataChange.forEach((doc: any) => {
          // this.items.push(doc.data());
          items.push({ ...doc.data(), id: doc.id });
        });

        this.dataProvider.wishlistItems = items;
        console.log("WishlistItems",items);
      });


    });
  }
  ngOnDestroy(): void {
    this.itemListSubscription.unsubscribe();
  }

  isheadervisible() {
    return window.location.pathname.startsWith('/admin');
  }
}
