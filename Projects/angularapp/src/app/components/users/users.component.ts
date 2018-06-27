import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enabledAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Mehdi',
        lastName: 'Ze.',
        email: 'mehdize@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Sam',
        lastName: 'Ji',
        email: 'samji@gmail.com',
        isActive: false,
        registered: new Date('07/8/2015 05:20:00'),
        hide: true
      },
      {
        firstName: 'Linda',
        lastName: 'Bumzi',
        email: 'lindabumzi@lool.lol',
        isActive: true,
        registered: new Date('07/01/2010 04:30:00'),
        hide: true
      }
    ];

    this.loaded = true;
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   }
  // }

  onSubmit(e) {
    console.log(123);

    e.preventDefault();
  }
}
