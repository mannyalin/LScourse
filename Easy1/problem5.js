let readline = require('readline-sync');

console.log('What is the bill?');
let bill = parseFloat(readline.prompt(), 10);

console.log('What is the tip percentage?')
let tipPercent = parseFloat(readline.prompt(), 10);

let tip = bill * (tipPercent / 100);
let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`)
