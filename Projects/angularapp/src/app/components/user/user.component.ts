import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',  
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // Properties
  firstName = 'Mehdi';
  lastName = 'Z';
  age = 38;
  address = {
    street: '155 main st',
    city: 'Dallas',
    state: 'US'
  };

  // Methods
  constructor() {

  }

  showAge() {
    return this.age + 2;
  }
}