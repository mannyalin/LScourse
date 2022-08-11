"use strict";
// This solution attempt used an object factory with a closure to make the `items` collection private. It allowed us to have an obejct that had methods to create a private `items` list and modify and get information for it. However for the assignment, it would not allow me to get to the `reports manager` section because the `init` method is suppose to assign the created object to the `items` property. The program right now only has an items variable that holds an array in its closure. Attempting again at the end of this first attempt.  

function createManager() {
  let items = [];

  return {
    create(item, category, qty) {
      if (item.length < 5 || category.length < 5 || category.includes(' ')) return false; 
      let entry = {
        SKU : item.slice(0, 3) + category.slice(0, 2),
        itemName: item,
        category,
        quantity: qty
      }
      items.push(entry);
    },
    
    update(sku, obj) {
      items.forEach(item => {
        if(item['SKU'] === sku) {
          return item[Object.keys(obj)] = Number(Object.values(obj));
        }
      })
    },
    
    delete(sku) {
      let index = items.findIndex(entry => entry['SKU'] === sku);
      console.log(index)
      items.splice(index, 1)
    },

    items() {
      return items.map(item => item['itemName'])
    },

    inStock() {
      return items.filter(item => item['quantity'] > 0)
    }, 

    itemsInCatergory(category) {
      return items.filter(item => item['category'] === category)
    }
  }
}

let ItemManager = createManager();

ItemManager.create('asd', 'sports', 0);
ItemManager.create("basketball", "sports", 1);
ItemManager.create('soccer ball', 'sports', 5);
ItemManager.create('racketball', 'sports', 0);
ItemManager.create('kitchen pot', 'cooking', 3);
ItemManager.update('bassp', { quantity : 3 })
ItemManager.delete('bassp')
console.log(ItemManager.items());
console.log(ItemManager.inStock());
console.log(ItemManager.itemsInCatergory('cooking'))
console.log(ItemManager)

//
