/*
Write a program that receives a series of digits and returns all possible consecutive series of a specified length.

create a class `Series` that takes a string of digits as an argument
Save string
the class has a method `slices` that takes a number as an argument. The number specifies the length of the series to be returned.

`slices` method returns an array of arrays. Each array contains the series of digits and has length as specified. 

slices method:
split the string into an array and assign it to a variable `digitArr`
if specified length is greater than length of digitArr throw error
Iterate through `this.stringDigits`
  - use slice method to slice from the current index to current index + specified length
  - push return array from slice to `digitArr`
end iteration
return digitArr


*/

class Series {
  constructor(stringDigits) {
    this.stringDigits = stringDigits;
  }

  slices(specLength) {
    let seriesCollect = []
    let digitArr = this.stringDigits.split('').map(num => Number(num));

    if (specLength > digitArr.length) {
      throw new Error('specLength greater than digitsString')
    }
    for (let idx =0; idx < digitArr.length; idx++) {
      seriesCollect.push(digitArr.slice(idx, idx + specLength))
    }
    return seriesCollect.filter(arr => arr.length === specLength)
  }
}

module.exports = Series;

