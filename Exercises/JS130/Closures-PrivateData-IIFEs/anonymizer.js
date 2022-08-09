"use strict";

// create `Account` prototype object
// `Account` will have `init` and `reanonymize` methods and these should be the only way to anonymize a user, created objects should nost have access to anonymyze other than those methods.
// anoynymyze creates a 16 character sequence composed of letter and numbers.
// Also a list of other properties and methods, only those should be inherited from Object.prototype. 


// let Account = { // The way I have this setup, the function that anonymizes a user can be accessed by `Account.reanonymize`. Rewrite with IIFE? Yes, with IIFE, and also a function that returns an object that has a closure to the variables and methods such as `anonymize` that we want to be private and not accessible except through `init` and `reanonymize`

//                 // If I turn it into IIFE, I will have to write a function that returns an object so it can be used by `Object.create` method. 

//                 // If we create an IIFE with a closure, the properties that `init` sets below will only be accessible through the methods. 
//                     // - have to format it so that it no longer needs `this` keyword and instead accesses the variables in the closure. 
//                     // - this also allows the rest of the method to acces them. 
                
//                 /* let Account = (function () {
//                     let userEmail;
//                     let userPassword;
//                     let userFirstName;
//                     let userLastName;

//                     function anonymize() {
//                       let display = '';
//                         let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//                         let charactersLength = characters.length;
//                           for (let i = 0; i <= 16; i++) {
//                           display += characters.charAt(Math.floor((Math.random) * charactersLength))
//                         }
//                         this.displayName = display;
//                         return true;
//                     };

//                     // work on the rest below with non commented format. 
//                   return {
//                         init(email, password, firstName, lastName) {
//                           userEmail = email;
//                           userPassword = password;
//                           userFirstName = firstName;
//                           userLastName = lastName;
//                           userDisplayName = anonymize()
//                         },

//                         // methods that we do want accesible by the created object will be added here( inside the returned object and not in the closure ) which will be in the prototype object of the returned object. 
//                       }
//                 })()

//                 */
//   init(email, password, firstName, lastName) {
//     this.userEmail = email;
//     this.userPassword = password;
//     this.userfirstName = firstName;
//     this.lastName = lastName;
//     this.displayName = this.reanonymize(this.password)//generate 16 random characters of numbers and letters.
//     return this;
//   },

//   checkPass(pass) {
//     return pass === this.password; 
//   },

//   invalidPass() {
//     return 'Invalid Password'
//   },

//   reanonymize(pass) {
//     if(this.checkPass(pass)) {
//       let display = '';
//       let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//       let charactersLength = characters.length;
//       for (let i = 0; i <= 16; i++) {
//         display += characters.charAt(Math.floor((Math.random) * charactersLength))
//       }
//       this.displayName = display;
//       return true;
//     } else {
//       return this.invalidPass()
//     }
//   },

//   resetPassword(pass, newPass) {
//     if(this.checkPass(pass)) {
//       this.password = newPass;
//       return true;
//     } else {
//        return this.invalidPass();
//     }
//   },

//   firstName(pass) {
//     if(this.checkPass(pass)) {
//       return this.firstName;
//     } else {
//       return this.invalidPass();
//     } 
//   },

//   lastName(pass) {
//     if(this.checkPass(pass)) {
//       return this.lastName;
//     } else {
//       return this.invalidPass();
//     }
//   },

//   email(pass) {
//     if (this.checkPass(pass)) {
//       return this.email;
//     } else {
//       return this.invalidPass();
//     }
//   },

//   displayName() {
//     return this.displayName;
//   } 
// }

// Another attempt based on notes above from previous attempt

let Account = (function() { 
  let userEmail; 
  let userFirstName;
  let userLastName;
  let userPassword;
  
  function anonymize() {
    let userDisplayName = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
      
    for (let i = 0; i < 16; i++) {
        userDisplayName += characters.charAt(Math.floor((Math.random()) * charactersLength))
      }
    
    return userDisplayName; 
  }

  function checkPass(password) {
    return password === userPassword;
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    reanonymize(password) {
      if(checkPass(password)) {
        this.displayName = anonymize();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(currentPassword, newPassword) {
      if(checkPass(currentPassword)) {
        userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(password) {
      if(checkPass(password)) {
        return userFirstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName(password) {
      if(checkPass(password)) {
        return userLastName;
      } else {
        return 'Invalid Password';
      }
    },

    email(password) {
      if(checkPass(password)) {
        return userEmail;
      } else {
        return 'Invalid Password';
      }
    },
  }
})()

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true

console.log(displayName === fooBar.displayName);   // logs false
