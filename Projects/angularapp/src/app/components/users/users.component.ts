import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

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
        image: 'http://lorempixel.com/600/600/people/1'
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
        image: 'http://lorempixel.com/600/600/people/2'
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
        image: 'http://lorempixel.com/600/600/people/3'
      }
    ];

    this.loaded = true;

    
    // this.showExtended = false;

    // this.addUser({
    //   firstName: 'Dany',
    //   lastName: 'G'
    // });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
