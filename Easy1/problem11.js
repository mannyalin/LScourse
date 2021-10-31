/*
Problem:
Write a function that determines the UTF-16 value of a string passed as an argument. It will determine the UTF-16 value for every character in the string, the sum of all the values is the UTF-16 string value returned.

Examples:
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

As shown by the examples, an emptry string will return 0.
Non-Ascii characters work fromt the UTF-16 character set.

DATA:
input: string;
output: integer;

Algorithm:
Receive a string.
Set totalStringValue to zero.
Iterate through the string.
For each element of the string, add its UTF-16 value to totalStringValue.
Return totalStingValue.
*/

//Code

function utf16Value(stringUTF) {
  let totalStringValue = 0;
  for (let letter = 0; letter < stringUTF.length; letter++) {
    totalStringValue += stringUTF[letter].charCodeAt();
  }
  return totalStringValue;
}

const OMEGA = "\u03A9"
console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));