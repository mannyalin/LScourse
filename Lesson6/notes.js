/*
declarations, initialization, assignment, and re-assignment
variable scope, especially how variables interact with function definitions and blocks
primitive values, objects, and type coercions
object properties
mutability vs. immutability vs. const
loose and strict equality
passing arguments into and return values out of functions
working with Strings
working with Arrays, especially the iteration methods (forEach, map, filter, find, and sort)
working with Objects; accessing keys and values of an Object as arrays
arrays are objects
understand the concepts of pass-by-reference and pass-by-value
variables as pointers
console.log vs. return
truthiness vs. boolean
function definition and invocation
function declarations, function expressions, and arrow functions
implicit return value of function invocations
first-class functions
side-effects
naming conventions (legal vs idiomatic)
be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose.
*/

1//
/*The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in either the input or output arrays.
The order of the numbers in the input array should not matter.
*/

console.log(pairedNums([1, 3, 2, 6, 8, 5, 9, 7]));  // ==> [ [ 1, 3 ], [ 5, 7 ], [ 6, 8 ] ]
console.log(pairedNums([22, 33, 24, 26, 31, 35, 20, 27]));  // ==> [ [ 20, 22 ], [ 24, 26 ], [ 31, 33 ] ]

[20, 22, 24, 26, 27, 31, 33, 35]

// P - understand problem
//   Input: simple array
//   Output: Nested array(s)
  
//   Rules:
//   - Difference of 2
//   - Sorted in ascending with Nesting based on nestedArr[0]
//   - Unique elements outputted

// E - Examples and tests



// D - Data Structure
// Array, nested array

// A - Algorithm
// - init resultArray to be returned
// - sort array
// - iterate through copy array
//   - iterate again through the array
//   - check if any second layer element had difference of 2 with current first layer element
//     - once first one is found, check if any of those values are already in the resultArray
        //  - if it is not already in there, push those values into its own nested array.   
// - return resultArray

// C - Code with Intent

function pairedNums(arr) {
  let resultArray = [];
  arr.sort().forEach(num => {
    for(let idx = 0; idx < arr.length; idx += 1) {
      if ((num - arr[idx] === 2) && !resultArray.flat().includes(arr[idx]) && !resultArray.flat().includes(num)) {
        resultArray.push([num, arr[idx]]);
      }
    }
  });
}
// let mary = 'person';

// function getPerson() {
//   let mary = 'tortilla';
  
//   console.log(mary);

// };

// console.log(getPerson());
// console.log(mary);

// let obj = {
//   a : 2,
//   b : 3
// }

// for (let key in obj) {
//   console.log(key);
//   console.log(obj[key]);
// };

// let arr = [1, 2, 3];

// let arrmapped = arr.map(element => console.log(3)); // 1, 2, 3
// console.log(arrmapped); // [undefined, undefined, undefined]

// let arr = [1, 2, 3, 4];

// let odds = arr.filter(element => {
//   return element % 2 === 1;
// });

// console.log(odds);


