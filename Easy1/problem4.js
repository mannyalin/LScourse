let readline = require('readline-sync')

const SQMETERS_TO_SQFEET = 10.7639;
const SQFEET_TO_SQRMETERS = 0.0929;

console.log('Would you like to use meters or feet?')
let userAnswer = readline.prompt().toLowerCase().trim();

while (!(userAnswer === 'meters' || userAnswer === 'feet')) {
  console.log('Please choose only meters or feet');
  userAnswer = readline.prompt().toLowerCase().trim();
}

if (userAnswer === 'meters') {
  console.log('Enter the length of the room in meters');
  let length = readline.prompt();

  console.log('Enter the width of the room in meters');
  let width = readline.prompt();

  let areaInMeters = length * width;

  console.log(`The area of the room is ${areaInMeters} square meters (${(areaInMeters * SQMETERS_TO_SQFEET).toFixed(2)} square feet)`)
}

if (userAnswer === 'feet') {
  console.log('Enter the length of the room in feet');
  let length = readline.prompt();

  console.log('Enter the width of the room in feet');
  let width = readline.prompt();

  let areaInFeet = length * width;

  console.log(`The area of the room is ${areaInFeet} square feet (${(areaInFeet * SQFEET_TO_SQRMETERS).toFixed(2)} square meters)`)
}
