let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

let stringsArray = Object.values(obj)
stringsArray.forEach(arr => {
  arr.forEach(str => {
    let lettersArr =  str.split('');
    lettersArr.forEach(letter => {
      if ('aeiou'.includes(letter)){
        console.log(letter)
      }
    }) 
  })
})