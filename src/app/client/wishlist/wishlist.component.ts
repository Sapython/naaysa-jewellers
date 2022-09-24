import { docData } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { DataproviderService } from 'src/app/services/dataprovider.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public userId: any;
  public UserWishlist:any[]=[];

  constructor(public dataProvider: DataproviderService, public auth: AuthService) { }

  ngOnInit() {
     this.auth.getUser.subscribe(
      (res) => {
        this.userId = res?.uid
       console.log(this.userId)
       this.getUserWishlist()
        
      }
      
    )
    
  }

  // getUserWishlist(){
  //   this.auth.getUserWishlist(this.userId).then((res)=>{
  //    const data =  res
  //    console.log(data.docs)
  //   })
  // }


  getUserWishlist() {
    return this.auth.getUserWishlist(this.userId).then((res) => {
      res.forEach((element: any) => {
        this.UserWishlist.push(
          {
            ...element.data(),
            id: element.id
          }
        )
      });
      console.log(this.UserWishlist)
    })

  }

}
