// Problem
// Write a program that ask for the user's name. The program will greet the user in a normal way, but if the user adds an exclamation mark after their name, the computer will greet the user on all uppercase letters and ask why we are screaming.

// Examples
// What is your name? Bob
// Hello Bob.
// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

// Data
// Input: string, read from prompt
// Output: string, to terminal

// Algorithm
// Prompt the user to input their name
// save the input as name
// Check if the last element of the input is a "!"
//  - If it is , then reply on all caps
//  -If not, then reply with regular caps. 

// Code

let readline = require('readline-sync');

console.log('What is your name?')
let userName = readline.question();

let userNameCapitalized = userName.charAt(0).toUpperCase() + userName.slice(1);
let userNameScream = userName.toUpperCase();

if (userName[userName.length -1] === "!") {
  console.log(`Hello  ${userNameScream}. WHY ARE WE SCREAMING?`)
} else {
  console.log(`Hello ${userNameCapitalized}`)
}

