/*
Roman Numeral:
I : 1,
IV : 4,
V : 5,
IX : 9,
X : 10,
XL : 40,
L : 50,
XC: 90,
C : 100,
CD : 400,
D : 500,
CM : 900,
M : 1000,


No need to go over 3000
Modern Roman numerals are written by expressing each digit of the number separately, starting with the left most digit and skipping any digit with a value of zero.

Write a class `RomanNumeral` that takes a year as an argument. Number data type. Integers.
Save the argument as `this.year` of instance created with `RomanNumeral`.

create a method `toRoman` that converts `this.year` value to its Roman Numeral equivalent.

create an object that has the roman numeral symbols and its digit values, descending order.
Iterate through all the values and for each value, check if the value is less than `this.year`
If it is, then divide `this.year` by current value, and round down to the nearest integer. 
Use the result to repeat the key as it is concatenated to the roman numeral being built.
Subtract value by repeat amount and subtract product from `this.year`.
continue iteration till end of array.
return that roman numeral once finished. 


*/

class RomanNumeral {

  constructor(year) {
    this.year = year;
  } 
  
  static RomanEquival = {
    M : 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  toRoman() {
    let roman = '';
    Object.values(RomanNumeral.RomanEquival).forEach(value => {
      if (value <= this.year) {
       let key = Object.keys(RomanNumeral.RomanEquival).find(key => RomanNumeral.RomanEquival[key] === value)
       let mult = Math.floor(this.year/value);
       roman += key.repeat(mult)
       this.year -= value * mult;
      }
    })
    return roman;
  }
}

let rom = new RomanNumeral(11);
console.log(rom.toRoman())


module.exports = RomanNumeral;
