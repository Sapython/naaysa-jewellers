import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

  public userData : any;

  constructor() {
    console.log(this.userData)
   }
  
}
