function makeCounterLogger(start) {

  return function(end) {
    if (end > start) {
      for (let num = start; num <= end; num++) {
        console.log(num);
      } 
    } else if (end < start) {
      for (let num = start; num >= end; num--) {
        console.log(num);
      } 
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2