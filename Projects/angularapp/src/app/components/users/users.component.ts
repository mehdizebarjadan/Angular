import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enabledAdd: boolean = true;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Mehdi',
        lastName: 'Ze.',
        age: 20,
        address: {
          street: '50 Main st',
          city: 'Dallas',
          state: 'TX'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Sam',
        lastName: 'Ji',
        age: 70,
        address: {
          street: '80 shoosh st',
          city: 'San Jose',
          state: 'CA'
        },
        isActive: false,
        registered: new Date('07/8/2015 05:20:00')
      },
      {
        firstName: 'Linda',
        lastName: 'Bumzi',
        age: 18,
        address: {
          street: '9 oslo st',
          city: 'Lose Angeles',
          state: 'CA'
        },
        isActive: true,
        registered: new Date('07/01/2010 04:30:00')
      }
    ];

    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  fireEvent(e) {
    // console.log('Button Clicked');
    console.log(e.type);
  }
}
