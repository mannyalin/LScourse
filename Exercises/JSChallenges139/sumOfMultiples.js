/*
Write a program:
Given a natural number and a set of one or more numbers, find the sum of all the multiples of the numbers in the set that fit in the natural number.

If the set of numbers aren't given, use 3 and 5 as default.
If the set of numbers doesn't fit in the natural number, then return 0.

create a class `sumOfAllMultiples` with a static and instance method `to` that takes an argument: the natural number. 

The class also takes an optional argument of one or more numbers as the set of multiples, if none is given it defaults to 3 and 5. 

assign the arguments to `this.mutliples` as a spread syntax into an array.


create a `to` method that takes a natural number as an argument
Iterate over `this.multiples`and use a while loop for each value.
While the current value is less than argument:
  - if it isn't arlready in the `this.multiples` push it in,
  - then reassign current value to current value + starting current value.
end while loop
use reduce to return sum of all multiples.

 */

class sumOfAllMultiples {
  constructor(...args) {
    if(args.length === 0) {
      this.multiples = [3,5]
    } else {
      this.multiples = args;
    }
  }

  // static to(target) {
  //   let multiples = [3,5]
  //   if (multiples.every(num => num > target)) return 0;

  //   multiples.forEach(num => {
  //     let orginalNum = num
  //     let mult = num
  //     while(mult < target) {
  //       if(!(multiples.includes(mult))) {
  //         multiples.push(mult);
  //       }
  //       mult += orginalNum;
  //     }
  //   }) 

  //   return multiples.filter(num => num < target).reduce((acc, cur) => acc + cur, 0)
  // }
  
  to(target) {
    if (this.multiples.every(num => num > target)) return 0;

    this.multiples.forEach(num => {
      let orginalNum = num
      let mult = num
      while(mult < target) {
        if(!(this.multiples.includes(mult))) {
          this.multiples.push(mult);

          console.log(`mult ${mult}`);
          console.log(`multiples ${this.multiples}`)
        }
        
        
        mult += orginalNum;
      }
    }) 

    return this.multiples.filter(num => num < target).reduce((acc, mult) => acc +mult, 0)

  }

  static to(target) {
    return new sumOfAllMultiples().to(target);
  } 
}

console.log(sumOfAllMultiples.to(4))
module.exports = sumOfAllMultiples;