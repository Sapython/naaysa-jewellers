import { AuthService } from 'src/app/services/Auth/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUsersComponent } from './add-users/add-users.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() tenplusone_Users: number = 1069
  @Input() total_Users: number = 2069


  title = 'Table'

  users = [
    {
      'last_Name': 'Arora',
      'name': 'Akshat',
      "id": "16979",
      "image": "assets/2.jpeg",
      "emailId": "travisscott69@gmail.com",
      "purchase": "334",
      "dateJoin": "07/07/2019",
      "dateExp": "07/07/2019",
      "monthlyrecieved": "₹ 3000",
      "totalvalue": "₹ 80000",
    },
    {
      'last_Name': 'Arora',
      'name': 'Akshat',
      "id": "16979",
      "image": "assets/2.jpeg",
      "emailId": "travisscott69@gmail.com",
      "purchase": "334",
      "dateJoin": "07/07/2019",
      "dateExp": "07/07/2019",
      "monthlyrecieved": "₹ 3000",
      "totalvalue": "₹ 80000",
    },
    {
      'last_Name': 'Arora',
      'name': 'Akshat',
      "id": "16979",
      "image": "assets/2.jpeg",
      "emailId": "travisscott69@gmail.com",
      "purchase": "334",
      "dateJoin": "07/07/2019",
      "dateExp": "07/07/2019",
      "monthlyrecieved": "₹ 3000",
      "totalvalue": "₹ 80000",
    },
    {
      'last_Name': 'Arora',
      'name': 'Akshat',
      "id": "16979",
      "image": "assets/2.jpeg",
      "emailId": "travisscott69@gmail.com",
      "purchase": "334",
      "dateJoin": "07/07/2019",
      "dateExp": "07/07/2019",
      "monthlyrecieved": "₹ 3000",
      "totalvalue": "₹ 80000",
    },
    {
      'last_Name': 'Arora',
      'name': 'Akshat',
      "id": "16979",
      "image": "assets/2.jpeg",
      "emailId": "travisscott69@gmail.com",
      "purchase": "334",
      "dateJoin": "07/07/2019",
      "dateExp": "07/07/2019",
      "monthlyrecieved": "₹ 3000",
      "totalvalue": "₹ 80000",
    },
    {
      'last_Name': 'Arora',
      'name': 'Akshat',
      "id": "16979",
      "image": "assets/2.jpeg",
      "emailId": "travisscott69@gmail.com",
      "purchase": "334",
      "dateJoin": "07/07/2019",
      "dateExp": "07/07/2019",
      "monthlyrecieved": "₹ 3000",
      "totalvalue": "₹ 80000",
    },
    {
      'last_Name': 'Arora',
      'name': 'Akshat',
      "id": "16979",
      "image": "assets/2.jpeg",
      "emailId": "travisscott69@gmail.com",
      "purchase": "334",
      "dateJoin": "07/07/2019",
      "dateExp": "07/07/2019",
      "monthlyrecieved": "₹ 3000",
      "totalvalue": "₹ 80000",
    },
    {
      'last_Name': 'Arora',
      'name': 'Akshat',
      "id": "16979",
      "image": "assets/2.jpeg",
      "emailId": "travisscott69@gmail.com",
      "purchase": "334",
      "dateJoin": "07/07/2019",
      "dateExp": "07/07/2019",
      "monthlyrecieved": "₹ 3000",
      "totalvalue": "₹ 80000",
    },

  ]
  mobile_users = [
    {
      img: 'assets/2.jpeg',
      name: 'Arun Arora',
      email: '@csahbuihf.gmail.com',
      Id: 'S123Sd4',
      wallet: '80000',
      purchase: 698,
    },
    {
      img: 'assets/2.jpeg',
      name: 'Arun Arora',
      email: '@csahbuihf.gmail.com',
      Id: 'S123Sd4',
      wallet: '80000',
      purchase: 698,
    },
    {
      img: 'assets/2.jpeg',
      name: 'Arun Arora',
      email: '@csahbuihf.gmail.com',
      Id: 'S123Sd4',
      wallet: '80000',
      purchase: 698,
    },
    {
      img: 'assets/2.jpeg',
      name: 'Arun Arora',
      email: '@csahbuihf.gmail.com',
      Id: 'S123Sd4',
      wallet: '80000',
      purchase: 698,
    },
    {
      img: 'assets/2.jpeg',
      name: 'Arun Arora',
      email: '@csahbuihf.gmail.com',
      Id: 'S123Sd4',
      wallet: '80000',
      purchase: 698,
    },
  ]

  constructor(private dialogModule: MatDialog, private auth:AuthService) {

  }

  ngOnInit(): void {

  }
  adduser() {
    this.dialogModule.open(AddUsersComponent)
  }


  getAllUsers() {
    return this.auth.getAllUsers().then((res) => {
      res.forEach((element: any) => {
        this.users.push(
          {
            ...element.data(),
            id: element.id
          }
        )
      });
      console.log(this.users)
    })
  }

}
