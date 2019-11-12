import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];    //declaring an array of users
  showExtended: boolean = true;   //showExtended property signifies the details of a particular person(inthis case)
  loaded: boolean = false;

  constructor() { }

  ngOnInit() {
    // setTimeout(() => {       //setTimeOut is a function which we used for to show the Loading Users... msg
      this.users = [
        {
          firstName: 'Vidyalaxmi',
          lastName: 'Tumkur',
          age: 18,
          address: {
            street: '50 Main St',
            city: 'Boston',
            province: 'MA'
          }
        },
        {
          firstName: 'Kenny',
          lastName: 'Sebestian',
          age: 22,
          address: {
            street: '26 Sebestion St',
            city: 'Kitchener',
            province: 'ON'
          }
        },
        {
          firstName: 'Zakir',
          lastName: 'Khan',
          age: 23,
          address: {
            street: '78 Khan St',
            city: 'Waterloo',
            province: 'ON'
          }
        }
      ];

      this.loaded = true;
    // }, 2000);
      // this.showExtended = false; // if its set to false, you wont see the full description

      this.addUser({
      firstName: 'David',
      lastName: 'Williams'
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}

