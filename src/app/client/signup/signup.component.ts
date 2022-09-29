import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { DataproviderService } from 'src/app/services/dataprovider.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  ;

  constructor(public auth: AuthService, private router: Router, public dataProvider: DataproviderService) { }

  ngOnInit(): void {
  }

  signUpWithEmailAndPassword() {
    if (this.signupForm.value.email == '') {
      alert('please enter your email');
      return
    }

    if (this.signupForm.value.password == '') {
      alert('please enter your Password');
      return
    }

    this.auth.signUpWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password)
    this.router.navigateByUrl('/all-product')


  }



  // addUser() {

  //   const userData = {
  //     accessToken: this.dataProvider?.userData.accessToken,
  //     displayName: this.dataProvider?.userData.displayName,
  //     email: this.dataProvider?.userData.email,
  //     emailVerified: this.dataProvider?.userData.emailVerified,
  //     isAnonymous: this.dataProvider?.userData.isAnonymous,
  //     phoneNumber: this.dataProvider?.userData.phoneNumber,
  //     photoURL: this.dataProvider?.userData.photoURL,
  //     providerId: this.dataProvider?.userData.providerId,
  //     reloadListener: this.dataProvider?.userData.reloadListener,
  //     tenantId: this.dataProvider?.userData.tenantId,
  //     uid: this.dataProvider?.userData.uid,
  //     access: {access:'user'},
  //     orders:[],
  //     wishlist:[],
  //     cart:[],


  //   }
  //   this.auth.addUser(userData).then((res) => { }).catch((res) => { })
  // }
}

