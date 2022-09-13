import { AuthService } from './../../services/Auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {




  email: string = '';
  password: string = '';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  emailLogin() {
    if (this.email == '') {
      alert('please enter your email');
      return
    }

    if (this.password == '') {
      alert('please enter your Password');
      return
    }

    this.auth.emailLogin(this.email, this.password);
    this.email = '';
    this.password = '';

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
