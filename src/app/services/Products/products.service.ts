import { Injectable } from '@angular/core';
import { addDoc, Firestore, collection, docData, doc } from "@angular/fire/firestore";
import { getDocs } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fs:Firestore) { }  

  getCategories() {
    return getDocs(collection(this.fs, '/ProductsCategory'));
  }
}
