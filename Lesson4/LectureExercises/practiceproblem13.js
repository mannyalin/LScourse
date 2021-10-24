let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

// Should look like above.

arr.map(subArr => {
  let totalOdd = 0;
  return subArr.map(e => {
    if (e % 2 !== 0) {
      totalOdd += e;
    }
    return totalOdd;
  })
})