"use strict";

// Write a program that manages robot factory settings.
// When a robot is reset, it goes back to factory settings which generates a random name. 
// So once reset and the robot is asked for a name it will respond with a new random name. 
// Names must be random and should not a follow a predictable sequence. 
// There is a risk of collisions since it is random, but our solution should not allow the use of same name if avoidable. 

// Does it have a required length of characters? 
    // -- looks like it has to be 5 characters long with first 2 letters and last 3 is numbers.
// What characters are allowed to be used in the name? 
    // -- looks like just letters and numbers
// Is it case sensitive or need to be all uppercase?
    // all upper case



// TEST CASES from JEST
// Requires us to install NPM package `seedrandom` to test numbers that seem random but do have predictable sequence. 
//let Robot = require(./robot-name.js);
// Math.seedrandom = require('seedrandom')

/*
From jest it looks like we need a name method that returns the name of the robot.
  - Creating a method that creates a name and provides it right away will create a new name every time name is asked, so it should first check if it already has a name. 
The name has to be random and no predictable pattern if repeated again. 
The name should not be a repeat of another name that was previously given 
 - we can create an array to keep the names that have been generated. 
We need a reset method that will create a new name. 
  - check if it is not already in the previous name list before making it the robot's name and pushing it to the list of create names. 
*/
class Robot {

  constructor() {
    this.robotName = '';
  }
  static allNames = [];

  generateName() {
    let name = ''
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '1234567890';
    for(let i = 0; i < 2; i++) {
      name += letters[Math.floor(Math.random() * 23)]
    }

    for(let i = 0; i < 3; i++) {
      name += numbers[Math.floor(Math.random() * 10)]
    }

    if(!(Robot.allNames.includes(name))) return name;
    this.generateName();
  }

  name() {
    if(this.robotName) {
      return this.robotName;
    } else {
      this.robotName = this.generateName();
      return this.robotName;
    }
  }

  reset() {
    this.robotName = '';
  }
}

module.exports = Robot;


