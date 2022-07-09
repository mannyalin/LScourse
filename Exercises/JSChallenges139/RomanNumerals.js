/*
Roman Numeral:
I : 1,
V : 5,
X : 10,
L : 50,
C : 100,
D : 500,
M : 1000,


No need to go over 3000
Modern Roman numerals are written by expressing each digit of the number separately, starting with the left most digit and skipping any digit with a value of zero.

Algo:
create a class that takes a number as an argument
save the number for later use

create a collection of the Roman Numerals with its equivalent in digits
(have it in descending order)

create a 'romanNumeral' variable and set it to an empty string

create a method 'toRoman' that takes the number and converts it to its Roman numeral equivalent.
- iterate over the Roman numerals
 - if the current roman numeral is less than the number, repeat the roman numeral to its max value while still less than the number value, add the roman numeral to the 'romanNumeral' value.
 - subtract the value of the number by the value of the roman numeral and assign the new number the number variable

*/

class RomanNumeral {
  static Roman_Numerals = {
    M: 1000,
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

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let romanNumeralVersion = '';
    let toConvert = this.number;
    Object.keys(RomanNumeral.Roman_Numerals).forEach(numeral => {
      let value = RomanNumeral.Roman_Numerals[numeral];
     
      let multiple = Math.floor(toConvert / value);
      let remainder = toConvert % value;

      if (multiple > 0) {
      romanNumeralVersion += (numeral.repeat(multiple))
      }

      toConvert = remainder;
    })

    return romanNumeralVersion;
  }
}

let test = new RomanNumeral(685);
let newNum = test.toRoman();
console.log(newNum)
