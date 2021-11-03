let readline = require('readline-sync');

console.log('=> Enter the first number');
let firstNumber = readline.question();

console.log('=> Enter the second number');
let secondNumber = readline.question();

let sum = Number(firstNumber) + Number(secondNumber);
let subtract = Number(firstNumber) - Number(secondNumber);
let multiply = Number(firstNumber) * Number(secondNumber);
let quotient = Math.floor(Number(firstNumber)/Number(secondNumber))
let remainder = Number(firstNumber) % Number(secondNumber);
let power = Number(firstNumber) ** Number(secondNumber);
console.log(`==> ${firstNumber} + ${secondNumber} = ${sum}`)
console.log(`==> ${firstNumber} - ${secondNumber} = ${subtract}`)
console.log(`==> ${firstNumber} * ${secondNumber} = ${multiply}`)
console.log(`==> ${firstNumber} / ${secondNumber} = ${quotient}`)
console.log(`==> ${firstNumber} % ${secondNumber} = ${remainder}`)
console.log(`==> ${firstNumber} ** ${secondNumber} = ${power}`)