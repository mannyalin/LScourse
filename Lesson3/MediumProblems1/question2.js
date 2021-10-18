// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:

/*
Given a string
Split the string into an array of letters
Iterate through the array
  -if a letter is uppercase, return a lowercase letter into the new array
  -if a letter is lowercase, return an uppercase letter into the new array
  -if neither, then just return the same element(space)

  Create an Array of all Uppercase and lowercase letters
  Split the string to each individual element (split.('') so it can be an iterable array.
    -munstersDescription.split('')
  Use map that iterates through and returns a new array
    -.map(e => {
      if(Upper.includes(e)) {
        return e.tolowerCase
      } else {
        if(lower.includes(e)) {
          return e.toUpperCase
        } else {
          return e
        }
      }
    })

*/

let munstersDescription = "The Munsters are creepy and spooky.";

let Upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let Lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

munstersDescription.split('').map(e => {
  if(Upper.includes(e)) {
    return e.toLowerCase();
  } else if(Lower.includes(e)) {
    return e.toUpperCase();
  } else {
    return e;
  }
}).join('')

munstersDescription.split('').map(e => {
  if(e === e.toUpperCase()) {
    return e.toLowerCase()
  } else if(e === e.toLowerCase()) {
    return e.toUpperCase()
  } else {
    return e;
  }
}).join('')

var swapcase = function(str) {
  var string = str.split("");
  for (var i = 0; i < string.length; i++) {
      if (str.charAt(i) <= 'a' && str.charAt(i) >= 'z') {
          str.charAt(i).toUppercase();
      } else if (str.charAt(i) <= 'A' && str.charAt(i) >= 'Z') {
          str.charAt(i).toLowercase();
      }
  }
  str =string.join("");
  console.log(str);
  
  
};

swapcase(text);