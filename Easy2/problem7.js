/* 
P
Write a function that takes two arguments and returns true if exactly one of its argurments is truthy. 
It needs to return a boolean value true or false

input: any value;
output: true or false

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

Data:
input: values that will be determined to be truthy or falsy
output: true or false

Algo:
If first argument is a truthy value and second argument is truthy, return false
if first argument is a truthy value and second argument is falsey, return true
If first argument is a falsy value and second argument is truthy, return true
If first argument is a falsy value and second argument is falsy, return false

If first and second are true, return false
else use an Or operator to see if any of the argument is true
  -if it is, return true
  -if none are true, return false

*/

function xor(a, b) {
  if (a && b) {
    return false;
  } else if (a || b) {
    return true;
  } else {
    return false; 
  }
}

console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));