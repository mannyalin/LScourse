// Problem
// Write a function that returns the next to last word in the String passed to it as an argument.
// Words are any sequence of non-blank characters.
// Assume that the input String will always contain at least two words. 

// Examples
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// Data
// Input: string with at least two words
// Output: one word string

// Algo
// Receive a string with at least two words
// split the words into an array and save it to a variable
// set variable secondToLastWord to the second to last element of the array.
// return the secondToLastWord variable

// Code
function penultimate(str) {
  let strArr = str.split(' ');
  let secondToLastWord = strArr[strArr.length - 2];
  console.log(secondToLastWord);
}