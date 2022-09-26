import { Address, ExtraLoginEmailInfo } from './../../structures/user.structure';
import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, UserCredential } from '@angular/fire/auth';
import { addDoc, collection, deleteDoc, doc, DocumentReference, Firestore, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UserData } from 'src/app/structures/user.structure';
import { DataproviderService } from '../dataprovider.service';
import { urls } from '../urls';
import { async, EMPTY, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userAvailable: Subject<any> = new Subject()
  public userId: any;
  public userIsLoggedIn: boolean;
  public newUser: boolean = false
  userDoc: DocumentReference;
  cartItem: DocumentReference;


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
          this.userAvailable.next(user)
        }
        else {
          this.userIsLoggedIn = false;
        }
      })
    }
  }

  public readonly user: Observable<User | null> = EMPTY;


  public get getUser(): Observable<User | null> {
    console.log(this.user)
    return this.user;

  }


  public loginWithEmailPassword(email: any, password: any) {
    return signInWithEmailAndPassword(this.auth, email, password).then((credentials: UserCredential) => {
      console.log(credentials)

    }).catch((err) => {
      console.log(err)
    })
  }

  public signUpWithEmailAndPassword(email: any, password: any) {
    let data = createUserWithEmailAndPassword(this.auth, email, password).then(async (credentials: UserCredential) => {
      await this.setEmailUserData(credentials.user, {
        phoneNumber: '', photoURL: '',
        displayName: ''
      })
      this.newUser = true;

    }).catch((err) => {
      console.log(err)
      this.newUser = false;
    })
  }


  public async setEmailUserData(user: User, userData: ExtraLoginEmailInfo) {

    let data: UserData = {
      userId: user.uid || '',
      email: user.email || '',
      displayName: userData.displayName || '',
      photoURL: userData.photoURL || this.getRandomImage(),
      phoneNumber: userData.phoneNumber || '',
      emailVerified: true,
      firstLogin: false,
      access: { access: 'user' },
      orders: [],
      totalOrders: 0,
      totalCashback: 0,
      wishlist: [],
      cart: [],
      address: {
        country: '',
        region: '',
        pincode: 0,
        FlatAddress: '',
        houseNo: 0,
        Landmark: '',
        type: 'company',
        city: '',
        state: ''
      },
      dateOfBirth: '',
      recommendation: []
    }
    this.userDoc = doc(this.fs, 'users/' + user.uid);
    await setDoc(this.userDoc, data).then(() => {
      alert('userDataSet')
    });

    this.router.navigate(['/all-products'])
  }

  getRandomImage(): string {
    return 'https://avatars.dicebear.com/api/gridy/' + (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)) + '.svg';
  }

  public async logout() {
    alert('Logged Out!');

    this.dataprovider.userData = false;
    return await signOut(this.auth);
  }

}
