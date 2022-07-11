/*
Write a program that Converts octal to decimal
have to remember the base 8 pattern.

nth digit gets multiplied by 8^(n-1)
create a sum collection and set it to 0
have to reverse digits? keep as string, reverse, split, then treat as number
iterate through the numbers
  - n starts as 1 and goes till the length of number collection
  - use the formula with base 8 and add it to the sum
end iteration
return sum
*/

class Octal {
  constructor(digits) {
    this.digits = digits;
  }

  toDecimal() {
    if(this.digits.match(/[8-9A-za-z]/)) return 0;
    
    let numArrReverse = this.digits.split('').reverse();
    let sum = 0
    numArrReverse.forEach((digit, n) => {
      console.log(`digit ${digit}`)
      console.log(n)
      n = n + 1;
      console.log(`n + 1: ${n}`)
      sum += (Number(digit)) * (8**(n-1))
      console.log(`sum ${sum}`)
    });
    return sum;
  }
}

let oct = new Octal('17');
console.log(oct)
oct.toDecimal()

module.exports = Octal;