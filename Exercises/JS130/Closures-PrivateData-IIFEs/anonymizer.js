// create `Account` prototype object
// `Account` will have `init` and `reanonymize` methods and these should be the only way to anonymize a user, created objects should nost have access to anonymyze other than those methods.
// anoynymyze creates a 16 character sequence composed of letter and numbers.
// Also a list of other properties and methods, only those should be inherited from Object.prototype. 
"use strict";

let Account = {

  init(email, password, firstName, lastName) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.displayName = this.reanonymize(this.password)//generate 16 random characters of numbers and letters.
  },

  checkPass(pass) {
    return pass === this.password; 
  },

  invalidPass() {
    return this.invalidPass();
  },

  reanonymize(pass) {
    if(this.checkPass(pass)) {
      let display = '';
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for (let i = 0; i <= 16; i++) {
        display += characters.charAt(Math.floor((Math.random) * charactersLength))
      }
      this.displayName = display;
      return true;
    } else {
      return this.invalidPass()
    }
  },

  resetPassword(pass, newPass) {
    if(this.checkPass(pass)) {
      this.password = newPass;
      return true;
    } else {
       return this.invalidPass();
    }
  },

  firstName(pass) {
    if(this.checkPass(pass)) {
      return this.firstName;
    } else {
      return this.invalidPass();
    } 
  },

  lastName(pass) {
    if(this.checkPass(pass)) {
      return this.lastName;
    } else {
      return this.invalidPass();
    }
  },

  email(pass) {
    if (this.checkPass(pass)) {
      return this.email;
    } else {
      return this.invalidPass();
    }
  },

  displayName() {
    return this.displayName;
  } 
}

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false