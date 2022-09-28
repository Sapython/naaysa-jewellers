import { AuthService } from './../../services/Auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {




  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    
  });

  
  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  loginWithEmail() {
    if (this.loginForm.value.email == '') {
      alert('please enter your email');
      return
    }

    if (this.loginForm.value.password == '') {
      alert('please enter your Password');
      return
    }

     this.auth.loginWithEmailPassword(this.loginForm.value.email, this.loginForm.value.password).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
     this.router.navigateByUrl('/all-product')
    

  }

  // emailSinUp() {
  //   if (this.loginform.value) {
  //     this.auth.emailSignUp(this.loginform.value.username, this.loginform.value.password).then((res) => { console.log(res) }
  //     ).catch((err) => {
  //       console.log(err)
  //     })
  //   }
  // }
}
