
// Question 5
// What will the following code output?
console.log(false == '0'); // true
console.log(false === '0'); //false
// non-strict equality operators coerces the values to the same type before comparing them. The example above coerces false into the number 0 and the strin '0' into the number 0 before comparing them. 

// The strict equality operator does not coerce the operators therefore they have to be equal in value and type to be true.