import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() tenplusone_Users:number = 1069
  @Input() total_Users:number = 2069


  title = 'Table'

  users = [
    {
      'last_Name':'Arora',
      'name':'Akshat',
      "id" : "16979",
      "image" :"assets/2.jpeg",
      "emailId" :"travisscott69@gmail.com",
      "purchase" :"334",
      "dateJoin" :"07/07/2019",
      "dateExp" :"07/07/2019",
      "monthlyrecieved" :"₹ 3000",
      "totalvalue" :"₹ 80000",
    },
    {
      'last_Name':'Arora',
      'name':'Akshat',
      "id" : "16979",
      "image" :"assets/2.jpeg",
      "emailId" :"travisscott69@gmail.com",
      "purchase" :"334",
      "dateJoin" :"07/07/2019",
      "dateExp" :"07/07/2019",
      "monthlyrecieved" :"₹ 3000",
      "totalvalue" :"₹ 80000",
    },
    {
      'last_Name':'Arora',
      'name':'Akshat',
      "id" : "16979",
      "image" :"assets/2.jpeg",
      "emailId" :"travisscott69@gmail.com",
      "purchase" :"334",
      "dateJoin" :"07/07/2019",
      "dateExp" :"07/07/2019",
      "monthlyrecieved" :"₹ 3000",
      "totalvalue" :"₹ 80000",
    },
    {
      'last_Name':'Arora',
      'name':'Akshat',
      "id" : "16979",
      "image" :"assets/2.jpeg",
      "emailId" :"travisscott69@gmail.com",
      "purchase" :"334",
      "dateJoin" :"07/07/2019",
      "dateExp" :"07/07/2019",
      "monthlyrecieved" :"₹ 3000",
      "totalvalue" :"₹ 80000",
    },
    {
      'last_Name':'Arora',
      'name':'Akshat',
      "id" : "16979",
      "image" :"assets/2.jpeg",
      "emailId" :"travisscott69@gmail.com",
      "purchase" :"334",
      "dateJoin" :"07/07/2019",
      "dateExp" :"07/07/2019",
      "monthlyrecieved" :"₹ 3000",
      "totalvalue" :"₹ 80000",
    },
    {
      'last_Name':'Arora',
      'name':'Akshat',
      "id" : "16979",
      "image" :"assets/2.jpeg",
      "emailId" :"travisscott69@gmail.com",
      "purchase" :"334",
      "dateJoin" :"07/07/2019",
      "dateExp" :"07/07/2019",
      "monthlyrecieved" :"₹ 3000",
      "totalvalue" :"₹ 80000",
    },
    {
      'last_Name':'Arora',
      'name':'Akshat',
      "id" : "16979",
      "image" :"assets/2.jpeg",
      "emailId" :"travisscott69@gmail.com",
      "purchase" :"334",
      "dateJoin" :"07/07/2019",
      "dateExp" :"07/07/2019",
      "monthlyrecieved" :"₹ 3000",
      "totalvalue" :"₹ 80000",
    },
    {
      'last_Name':'Arora',
      'name':'Akshat',
      "id" : "16979",
      "image" :"assets/2.jpeg",
      "emailId" :"travisscott69@gmail.com",
      "purchase" :"334",
      "dateJoin" :"07/07/2019",
      "dateExp" :"07/07/2019",
      "monthlyrecieved" :"₹ 3000",
      "totalvalue" :"₹ 80000",
    },
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
