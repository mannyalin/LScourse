/*
P/E
Write a function that takes an array and returns and array of the values that are on the odd positions of the original array.

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

The values are on the element position and not the index position. 1st element, 3rd element, 5th element and so on, and not index 1, 3, 5. It would be index 0, 2, 4, and so on. So actually, it is even index starting from 0.

If there are only 2 elements, return the array containing the first element .
If there is only 1 element, return the original array. 
If it is an empty array, return empty array. 

D/A

receive an array, return an array of every other element starting from index 0
Set `oddArray` variable to an empty array.
Iterate through the array starting from index zero, incrementing by 2
Push every element to the `oddAray` array that is iterated through
Return the `oddArray` value.

*/

function oddities(arr) {
  let oddArray = [];
  for (let idx = 0; idx < arr.length; idx += 2) {
    oddArray.push(arr[idx]);
  }
  return oddArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []