/* 
P/E
Receive an array of strings. The strings will only consist of alphabetic characters, both uppercase and lowercase, and with no spaces. Return an array of the number of letters that are in the same index position in the alphabet as their index position in the word.

For example:  solve(["abode","ABc","xyzD"]) // [4, 3, 1]

input: array of strings
output: array of numbers

map? same amount of elements in array, and numbers in array

rules:
  - only alphabet characters
  - if no alphabet return 0
  - no space

D
input: array of strings
output: array of numbers

map? same amount of elements in array, and numbers in array

A

Set a variable 'alphabet' that holds the Alphabet.
Iterate through the array
For every element in the array, Iterate through every character in the element
Set a variable 'counter' to 0.
Does the index of the character equal its index in the alphabet
  - if yes, increment counter by 1
Return counter

*/

function solve(strArr) {
  return strArr.map(word => alphaMatch(word))
}

function alphaMatch(str) {
  let counter = 0;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  str = str.toLowerCase();
  for(let index = 0; index < str.length; index += 1) {
    if (str[index] === alphabet[index]) {
      counter += 1;
    }
  }
  return counter;
}

console.log(solve(["abode","ABc","xyzD"]));