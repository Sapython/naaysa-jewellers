import { Navigation } from 'swiper';
import { Injectable } from '@angular/core';
import { Firestore, collection, docData, doc, getDoc } from "@angular/fire/firestore";
import { getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from 'firebase/storage';
import { urls } from "../urls"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  storage = getStorage();
  constructor(private fs: Firestore) { }

  getCategories() {
    return getDocs(collection(this.fs, '/ProductsCategory'));
  }

  public addCategories(data: any) {
    return addDoc(collection(this.fs, '/ProductsCategory/'), data);
  }

  public getPriceRange() {
    return getDocs(collection(this.fs, '/PriceRange'));
  }

  // Get product

  getProducts() {
    return getDocs(collection(this.fs, '/product/'));
  }

  productById(PRODUCT_ID: string) {
    const productIdUrl = urls.productId.replace('{PRODUCT_ID}', PRODUCT_ID);
    return getDoc(doc(this.fs, productIdUrl));
  }




  addProductsByCat(data: any) {
    return addDoc(collection(this.fs, '/product/'), data);
  }

  // Vendor

  public addVendor(data: any) {
    return addDoc(collection(this.fs, urls.vendors), data);
  }

  public getVendors() {
    return getDocs(collection(this.fs, urls.vendors));
  }


  // Offers
  public addOffers(data: any) {
    return addDoc(collection(this.fs, urls.offers), data);
  }

  // Update Product

  public updateTrendingProducts(data: any) {
    return addDoc(collection(this.fs, '/products/0DKz7iBxVTyGE990ibv1/TrendingProducts/'), data);
  }

  async upload(
    path: string,
    file: File | ArrayBuffer | Blob | Uint8Array
  ): Promise<any> {
    // const ext = file!.name.split('.').pop();
    if (file) {
      try {
        const storageRef = ref(this.storage, path);
        const task = uploadBytesResumable(storageRef, file);
        await task;
        const url = await getDownloadURL(storageRef);
        return url;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    } else {
      // handle invalid file
      return false;
    }
  }

}
