import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ref, uploadBytesResumable, getDownloadURL, Storage } from '@angular/fire/storage';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private fs:Firestore,private storage:Storage) { }

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

  getCategories(){
    return getDocs(collection(this.fs,'categories'))
  }

  addCategory(category:any){
    return addDoc(collection(this.fs,'categories'), category)
  }

  deleteCategory(id:string){
    return deleteDoc(doc(this.fs, 'categories', id))
  }

  addProduct(product:any){
    return addDoc(collection(this.fs,'products'), product)
  }
}
