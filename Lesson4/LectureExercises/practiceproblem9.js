let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(arr => {
  if (typeof(arr[0]) === 'number') {
    return arr.slice().sort((a, b) => a - b)
  } else {
     return arr.slice().sort()
  } 
})
