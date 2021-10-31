// Problem:
// Write a function to that takes any year greater than 0 and return true if the year is a leap year, or false if it is not.
// A leap year is any year that is divisible by 4, except when it is also divisible by 100. But if it is also divisible by 400 it is a leap year.

// Examples 
// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

// Assumptions
// will only receive integers greater than 0.

// Data
// input is an integer
// output is a boolean true or false

// Algorithm
// Receive an integer to represent a year
// Check if the number is evenly divisible by 4
//   - if not, it is not a leap year,  return false
// Check to see if it is also divisible by 100
//   - if it is, then check if it is also divisible by 400
//      - if not divisible by 400, it is not a leap year, return false.
//      - if it is divisible by 400, it is a leap year, return true.

// Code
function isLeapYear (year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  } 
  return false;
}

console.log(isLeapYear(2016));    
console.log(isLeapYear(2015));      
console.log(isLeapYear(2100));    
console.log(isLeapYear(2400));     
console.log(isLeapYear(240000));   
console.log(isLeapYear(240001));    
console.log(isLeapYear(2000));     
console.log(isLeapYear(1900));      
console.log(isLeapYear(1752));      
console.log(isLeapYear(1700));      
console.log(isLeapYear(1));         
console.log(isLeapYear(100));       
console.log(isLeapYear(400)); 