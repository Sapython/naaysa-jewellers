import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, Firestore } from 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private fs:Firestore, private auth: AngularFireAuth, private router:Router) { }




  public emailLogin(email: any, password:any){
    this.auth.signInWithEmailAndPassword(email, password).then(()=>{
      localStorage.setItem('token', 'true');

    },err => {
      alert('something went wrong');
    })
  }

  public emailSignUp(email: any, password:any){
    this.auth.createUserWithEmailAndPassword(email, password).then(()=>{
      alert('user Created');

    },err => {
      alert('something went wrong');
    })
  }

  logOut(){
    this.auth.signOut().then(()=>{
      localStorage.removeItem('token');
      alert("sign Out Success")
    }, err => {
      alert("something went wrong")
    } )
  }

}
