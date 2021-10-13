// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

// given an array, mutate it and remove index 2.

let numbers = [1, 2, 3, 4, 5]
numbers.splice(2, 1)
console.log(numbers); // [1, 2, 4, 5]