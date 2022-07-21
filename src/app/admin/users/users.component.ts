import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  editmode:boolean =false

  @Input() totalUsers:number = 1069
   @Input() newUsers:number = 2069


  title = 'Table'

  users = [
    {
      "id" : "16979",
      "pic" :"",
      "emailId" :"travisscott69@gmail.com",
      "amount" :"334",
      "dateJoin" :"07/07/2019",
      "dateExp" :"07/07/2019",
      "payment" :"₹ 500000",
      "amnt" :"₹ 1000000",
      "icon" :"",
      // "Action" :""
    },
    {
      "id" : "16979",
      "pic" :"",
      "emailId" :"travisscott69@gmail.com",
      "amount" :"334",
      "dateJoin" :"07/07/2019",
      "dateExp" :"07/07/2019",
      "payment" :"₹ 500000",
      "amnt" :"₹ 1000000",
      "icon" :"",
      // "Action" :""
    },
    {
      "id" : "16979",
      "pic" :"",
      "emailId" :"travisscott69@gmail.com",
      "amount" :"334",
      "dateJoin" :"07/07/2019",
      "dateExp" :"07/07/2019",
      "payment" :"₹ 500000",
      "amnt" :"₹ 1000000",
      "icon" :"",
      // "Action" :""
    },
    {
      "id" : "16979",
      "pic" :"",
      "emailId" :"travisscott69@gmail.com",
      "amount" :"334",
      "dateJoin" :"07/07/2019",
      "dateExp" :"07/07/2019",
      "payment" :"₹ 500000",
      "amnt" :"₹ 1000000",
      "icon" :"",
      // "Action" :""
    },
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
