import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  ;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  // emailSinUp() {
  //   if (this.signupForm.value) {
  //     this.auth.emailSignUp(this.signupForm.value.username, this.signupForm.value.password).then((res) => { console.log(res) }
  //     ).catch((err) => {
  //       console.log(err)
  //     })
  //   }
  // }
}

