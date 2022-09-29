import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

  public userData: any;
  public cartItems: any[] = [];
  public wishlistItems: any[] = [];
  public orderData:any[] = [];
  public deliveryAddressSelected:any;
  public paymentsCheck:any; 
  public LoggedInuserData:any;
  public products:any[] = []

  constructor() {
    console.log(this.userData)
    console.log(this.deliveryAddressSelected)

  }

}
