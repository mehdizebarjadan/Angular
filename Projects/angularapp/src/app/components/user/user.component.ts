import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',  
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // Properties
  firstName = 'Mehdi';
  lastName = 'Ze.';
  age = 38;

  // Methods
  constructor() {
    // this.sayHello();
    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);

  }

  sayHello() {
    console.log(`Hello ${this.firstName}`); //es6 new way to do >> ('Hello' + ' ' + this.firstName)
  }

  hasBirthday() {
    this.age += 1;
  }
}