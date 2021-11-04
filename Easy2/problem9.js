/*
P/E
Write a function that takes a string of numbers and returns the appropriate integer. 
No +, - or any invalid characters. All characters are assumed to be numberic
Can't use any of the String(), parseInt(), Number() methods. Calculate the result by analyzing the characters in the string.


console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

D/A
Input : string of numbers
Output: integers

create a `DIGITS` objec with string keys and its matching integer value as values
split the characters of the string into an array of characters.
map through the characters
  - return the corresponding value of Digits at the current character key
  - save the returned array to a variable
Iterate through the returned array 
  - set a variable `value` to zero
  - reassign this value by adding the product of value * 10 and the current integer in the iteration
  - return value
*/

function stringToInteger(strDigits) {
  const DIGITS = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9
  };
  let strToInteger = strDigits.split('').map(digit => DIGITS[digit]);
  let value = 0;
  strToInteger.forEach(integer => value = (10 * value) + integer);
  return value;
}

console.log(stringToInteger("4321"))
console.log(stringToInteger("570"))
