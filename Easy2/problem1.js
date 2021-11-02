// Problem
// create a function that takes 2 arguments, an array and an object.
// The array will contain 2 or more elements. When combined together with adjoining spaces, it will produce a person's name. 
// The object will contain two keys, "title" and "occupation", and the appropriate values.
// The function should return a greeting that uses the persons' full name and their title as shown in the example below

// Examples
// console.log(
// greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

// Data
// input: array and object
// output logs a string on the terminal

// Algo:
// set the value of fullName to the joint value of the array argument with a space as a delimiter.
// Set the value of fullTitle to the objects title and object's occupation with a space in between.
// print out string literal of the greeting with the fullName and fullTitle included.

// code:

function greetings(arrName, objTitle) {
  let fullName = arrName.join(' ');
  let fullTitle = `${objTitle.title} ${objTitle.occupation}`;
 return `Hello, ${fullName}! Nice to have a ${fullTitle} around.`
}

console.log(greetings(["john", "Q", "Doe"], {title: "Master", occupation: "Plumber"}))
console.log(greetings(["Julia", "X", "Allender"], {title: "Senior", occupation: "Consultant"}))
console.log(greetings(["B", "Z", "Dude"], {title: "Master", occupation: "Mind"}))