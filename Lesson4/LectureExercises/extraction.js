let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }


function selectFruit(produceObject) {
  let fruitCollection = {};
  let produceArray = Object.keys(produceObject)
  for(let counter = 0; counter <= produceObject.length -1; counter += 1) {
    let currentKey = produceArray[counter];
    let currentyValue = produceObject[currentKey];
    if(produceObject[currentKey] === 'Fruit') {
      fruitCollection[currentKey] = currentyValue;
    }
  }
}