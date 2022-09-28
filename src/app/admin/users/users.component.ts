import { AuthService } from 'src/app/services/Auth/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUsersComponent } from './add-users/add-users.component';
import { DatabaseServiceService } from 'src/app/services/database-service/database-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @Input() tenplusone_Users: number = 1069;
  @Input() total_Users: number = 2069;

  title = 'Table';

  users: any[] = [];
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
  ];

  constructor(
    private dialogModule: MatDialog,
    private databaseService: DatabaseServiceService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }
  adduser() {
    this.dialogModule.open(AddUsersComponent);
  }

  getAllUsers() {
    return this.databaseService.getAllUsers().then((res) => {
      res.forEach((element: any) => {
        this.users.push({
          ...element.data(),
          id: element.id,
        });
      });
      console.log(this.users);
    });
  }
}
