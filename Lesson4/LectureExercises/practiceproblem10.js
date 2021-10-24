let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// Sor the subarrays as before except in descending order.

arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a
    }

    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1; 
    } else {
      return 0;
    }
  })
})