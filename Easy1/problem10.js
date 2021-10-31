// Write a function that receives an integer greater than 1. The function computes
// all numbers between 1 and the integer(inclusive) that are multiples of 3 or 5. 

// Examples 
// If the supplied number is 20 the result is 98 (3 + 5 + 6 + 9 + 10 +12 + 15 + 18 +20)
// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168
// It is multips of 3 OR 5 and not both.

// DATA
// input is an integer
// output is an integer

// Algo
// set the integer argument to a parameter variable
// set a variable sum equal to zero. 
// Iterate through all integers from 1 to the passed integer and check if they are evenly divisible by 3 or 5.
// If divisible by 3 or 5 add to the sum variable.
// return sum

// Code

function multisum(int) {
  let sum = 0;
  for (let i = 1; i <= int; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
 }
 

 console.log(multisum(3));
 console.log(multisum(5));
 console.log(multisum(10));
 console.log(multisum(1000));
 console.log(multisum(1));
