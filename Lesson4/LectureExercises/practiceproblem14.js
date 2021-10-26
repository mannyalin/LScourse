// Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};


let newArr = []
for (let prop in obj) {
  if (obj[prop]['type'] === 'fruit') {
    let colors = obj[prop]['colors'];
    let capColors = colors.map(color => {
      return color.charAt(0).toUpperCase() + color.slice(1);
    })
    newArr.push(capColors)
  } else if (obj[prop]['type'] === 'vegetable') {
    let size = obj[prop]['size'];
    let UppercasedSize = size.toUpperCase();
    newArr.push(UppercasedSize)
  }
}
console.log(newArr);