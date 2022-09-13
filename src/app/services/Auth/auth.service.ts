import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private fs:Firestore, private auth: Auth, private router:Router) { }

  public emailLogin(email: any, password:any){
    signInWithEmailAndPassword(this.auth,email, password).then(()=>{
      localStorage.setItem('token', 'true');
    },err => {
      alert('something went wrong');
    })
  }

  public emailSignUp(email: any, password:any){
    createUserWithEmailAndPassword(this.auth,email, password).then(()=>{
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
