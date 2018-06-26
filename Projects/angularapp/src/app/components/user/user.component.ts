import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',  
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  // Properties
  user: User;
  
  // Methods
  constructor() {
   
  }

  ngOnInit() {
    this.user = {
      firstName: 'Mehdi',
      lastName: 'Ze.',
      age: 30,
      address: {
        street: '50 Main st',
        city: 'Dallas',
        state: 'US'
      }
    }
  }
}
