/*
P
Write a function that takes a string argument and returns a new string that contains the value of the original string  with all consecutive duplicate characters collapsed into a single character.

It looks like it is not Case senitive.
form of a string but can be digits
If emptry string is received, returns empty string
if only same character duplicated, will have just one character returned.
if only one character, returns that character. 
character does not have to be unique for entire string, only that consecutive group needs to be deleted duplicates.

E
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

D:
input : string
output: string

A:
iterate through the string
  - for each character, if character does not equal the last character added to accumulator , append that character
  -return new string with all characters appended to it.


*/

function crunch(string){
  return string.split('').reduce((accumulator, current) => {
  if (current !== accumulator[accumulator.length -1]) {
      accumulator += current;
      } 
  return accumulator
  },'');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('gggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));