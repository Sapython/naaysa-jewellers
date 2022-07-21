import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  addProfileForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    // address: new FormControl(),
    // phoneNumber: new FormControl(),
    // country: new FormControl(),
    // state: new FormControl(),
    // city: new FormControl(),
  });

   profileeditmode: boolean = false;

  constructor() {}

  users={
    firstname:"",
    lastname:"",
  }

  ngOnInit(): void {
    this.addProfileForm 
  }


 }
