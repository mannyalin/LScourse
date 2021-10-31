// Problem:
// Write a function that receives two strings as arguments
// Determine the lengths of the strings
// return a result that concatenates the shorter string, the longer string, then shorter string again

// Examples/Case Study
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
// Assume that the strings given will have different lengths.

// Data:
// Input: string , two strings of differing lengths
// Output: string, one string, concatenate shortLongShort

// Algorith:
// Write a function that takes in two arguments(str1, str2)
// If str1.length is shorter than str2, return str1.concat(str2,str1)
// If str2.length is shorter than str1, return str2. concat(str1,str2)

// Code:

function shortLongShort(str1, str2) {
  return str1.length < str2.length ? str1.concat(str2, str1) : str2.concat(str1, str2);
}
