const readline = require('readline-sync');

console.log('Please enter an integer greater than 0: ');
let integer = Number(readline.question());

console.log('Enter "s" to compute the sum, or "p" to compute the product. ' );
let sumOrProduct = readline.question();

if (sumOrProduct === 's') {
  let sum = 0;
  for (let i = 1; i <= integer; i++) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}`)
}

if (sumOrProduct === "p") {
  let product = 1;

  for (let i= 1; i <= integer; i++) {
    product *= i;
  }
  console.log(`The product of the integers between 1 and ${integer} is ${product}`)
}