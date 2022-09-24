import { Component, OnDestroy, OnInit } from '@angular/core';
import { collection, collectionChanges, collectionSnapshots, Firestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { AuthService } from './services/Auth/auth.service';
import { DataproviderService } from './services/dataprovider.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, OnDestroy {
  title: "naysaa "

  itemListSubscription: Subscription = Subscription.EMPTY;
  items: any[] = [];
  constructor(private firestore: Firestore, private auth: AuthService, private dataProvider : DataproviderService) { }

  ngOnInit() {

    

    this.auth.userAvailable.subscribe((value) => {
      collectionSnapshots(
        collection(this.firestore, 'users/'+ value.uid + "/cart")
      ).subscribe((dataChange) => {
        this.items = [];
        dataChange.forEach((doc: any) => {
          
          // this.items.push(doc.data());
          this.items.push({...doc.data(), id:doc.id});
          
        });

        this.dataProvider.cartItems = this.items;
        console.log( this.items )
      });
    })



    this.auth.userAvailable.subscribe((value) => {
      collectionSnapshots(
        collection(this.firestore, 'users/'+ value.uid + "/wishlist")
      ).subscribe((dataChange) => {
        this.items = [];
        dataChange.forEach((doc: any) => {
          
          // this.items.push(doc.data());
          this.items.push({...doc.data(), id:doc.id});
          
        });

        this.dataProvider.wishlistItems = this.items;
        console.log( this.items )
      });
    })

  }
  ngOnDestroy(): void {
    this.itemListSubscription.unsubscribe();
  }

  isheadervisible(){
    return window.location.pathname.startsWith('/admin')
  }
}
