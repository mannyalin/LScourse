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
  for (let counter = 0; counter < produceArray.length; counter++) {
    let currentKey = produceArray[counter];
    let currentValue = produceObject[currentKey];
    if (currentValue === 'Fruit') {
      fruitCollection[currentKey] = currentValue;
    }
  }
  return fruitCollection;
}

function selectFruit(produceObject) {
  let fruitCollection = {};
  let produceKeys = Object.keys(produceObject);
  for (let currentKey of produceKeys) {
    currentValue = produceObject[currentKey]
    if (currentValue === 'Fruit') {
      fruitCollection[currentKey] = currentValue;
    }
  }
  return fruitCollection;
}

