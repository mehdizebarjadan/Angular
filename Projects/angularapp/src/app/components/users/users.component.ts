import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

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
        }
      },
      {
        firstName: 'Sam',
        lastName: 'Ji',
        age: 70,
        address: {
          street: '80 shoosh st',
          city: 'San Jose',
          state: 'CA'
        }
      },
      {
        firstName: 'Linda',
        lastName: 'Bumzi',
        age: 18,
        address: {
          street: '9 oslo st',
          city: 'Lose Angeles',
          state: 'CA'
        }
      }
    ];

    this.addUser({
      firstName: 'Dany',
      lastName: 'G',
      age: 58,
      address: {
        street: '9 athabs st',
        city: 'San Francisco',
        state: 'CA'
      }
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
