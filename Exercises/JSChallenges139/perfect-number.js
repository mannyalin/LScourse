/*
Wrote a program that can tell if a number is perfect, abundant, or deficient.

Aliquot Sum is the sum of all the positive divisors(numbers that can be evenly divided into the target number without remainders, excluding the target number itself) of the number.

perfect numbers have an aliquot sum that is equal to the original number
abundant numbers have an aliquot sum that is greater than the original number/
deficient numbers have an aliquot sum that is less than the original number.

prime numbers are always deficient because it will always have an aliquot sum of 1.

create a class `PerfectNumber` that has a static method named `classify` that takes a number as an argument.

if number is less than 0 or 1?, throw error. 
create a variable `Aliquot`and set it to 0

iterate from 1 to less than `target` number
  - divide target number by current number
    - if target % current === 0 , add current to `Aliquot`
end iteration

  if aliquot > target return abundant
  if aliquot < target return deficient
  if aliquot === target return perfect
*/

class PerfectNumber {
  static classify(target) {
    if(target < 1) {
      throw new Error("Number must be greater than or equal to 1.")
    }
    let aliquot = 0;
    for(let num = 1; num < target; num++) {
      if(target % num === 0) {
        aliquot += num;
      } 
    }
    if(aliquot > target) return 'abundant';
    if(aliquot < target) return 'deficient';
    if(aliquot === target) return 'perfect';
  }
}

console.log(PerfectNumber.classify(6))

module.exports = PerfectNumber;