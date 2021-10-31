// This is a continuation of the previous exercise.

// The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

function isLeapYear (year) {

  if (year >1752) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        }
        return false;
      }
      return true;
    } 
    return false;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2015));
console.log(isLeapYear(100));
console.log(isLeapYear(4000));
console.log(isLeapYear(400));
console.log(isLeapYear(2016));
