import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector : 'app-user',
  templateUrl : './user.component.html',      // template : '<h2>VTumkur</h2>'
  styleUrls : ['./user.component.css'],
  // styles: [`
  // h2{
  //   color : blue
  // }`]
})

export class UserComponent implements OnInit {

  user: User;         //its refering to the User model

  // Properties    // these are the different types which can be used
  // firstName: string;
  // lastName: string;
  // age: number;
  // address;

  // foo: any;
  // hasKids: boolean;
  // numberArray: number[];
  // stringArray: string[];
  // mixedArray: any[];
  // myTuple: [string, number, boolean];
  // unusable: void;
  // u: undefined;
  // n: null;

  // methods
  constructor() {


    // console.log("using Constructor");
    // this.sayHello();
    // this.hasBirthday();
    // this.firstName = 'Vidya';
    // this.lastName = 'tumkur';
    // this.age = 18;
    // this.address = {
    //     street : '85 Orchard Mill Crescent',
    //     city: 'Kitchener',
    //     province : 'ON'
    // };

    // this.foo = 'Foo can be of any type';   // it can have any value:boolean,integer,...
    // this.hasKids = false;
    // this.numberArray = [1,2,3];
    // this.stringArray = ['vidya', 'amruta'];
    // this.myTuple = ['testingString', 2019, true];
    // this.unusable = undefined;
    // this.u = undefined;
    // this.n = null;

    // console.log(this.addNumbers(2, 3));
  }

  ngOnInit() {      //its considered to be a best practice to write all the executable codes in this function
    this.user = {
      firstName: 'Vidyalaxmi',
      lastName: 'Tumkur',
      age: 18,
      address: {
        street: '50 Main St',
        city: 'Boston',
        province: 'MA'
      }
    };
  }
  // showAge() {
  //   return this.age;
  // }

  // addNumbers(num1: number, num2: number): number {
  //     return num1 + num2;
  // }
  // sayHello() {
  //   console.log(` Hello ${this.firstName}`);
  // }

  // hasBirthday() {
  //   this.age += 1;
  //   console.log(`${this.age}`);
  // }
}
