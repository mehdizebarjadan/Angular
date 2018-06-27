import { Injectable } from '@angular/core';

import { User } from '../models/User';

@Injectable()
export class DataService {
  users: User[];

  constructor() {
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
   }

   getUsers(): User[] {
     console.log('Fetching users from sevice...');
     return this.users;
   }

   addUser(user: User){
     this.users.unshift(user);
   }
}
