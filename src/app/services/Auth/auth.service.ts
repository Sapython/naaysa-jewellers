import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential } from '@angular/fire/auth';
import { addDoc, collection, doc, Firestore, getDoc, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DataproviderService } from '../dataprovider.service';
import { urls } from '../urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  public userId: any;
  public userIsLoggedIn: boolean;
  public newUser: boolean = false

  constructor(private fs: Firestore, private auth: Auth, private router: Router, public dataprovider: DataproviderService) {
    if (auth) {
      console.log(this.auth);
      this.user = authState(this.auth);

      this.user.subscribe((user: any) => {
        if (user) {
          console.log(user)
          this.userIsLoggedIn = true;
          this.userId = user.uid
          this.dataprovider.userData = user;
        }
        else {
          this.userIsLoggedIn = false;
        }
      })


    }
  }



  public emailLogin(email: any, password: any) {
    return signInWithEmailAndPassword(this.auth, email, password).then((credentials: UserCredential) => {
      console.log(credentials)

    }).catch((err) => {
      console.log(err)
    })
  }

  emailSignUp(email: any, password: any) {
    return createUserWithEmailAndPassword(this.auth, email, password).then( (credentials: UserCredential) => {
     
      this.newUser = true;

    }).catch((err) => {
      console.log(err)
      this.newUser = false;
    })
  }

  // user collection
  public addUser(data: any) {
    return addDoc(collection(this.fs, urls.users), data);
  }

  public getUser(USER_ID: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);
    return getDoc(doc(this.fs, userIDUrl)).then((res) => { }).catch((err) => { console.log(err) });
  }

  getAllUsers() {
    return getDocs(collection(this.fs, '/AllUsers'))
  }

  public async logout() {
   
    this.router.navigate(['/signup']);
    this.dataprovider.userData = false;
    return await signOut(this.user);
  }

}
