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
          console.log("in")
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

ItemManager = createManager();

ItemManager.create('asd', 'sports', 0);
ItemManager.create("basketball", "sports", 1);
ItemManager.create('soccer ball', 'sports', 5);
ItemManager.create('racketball', 'sports', 0);
ItemManager.create('kitchen pot', 'cooking', 3);
// ItemManager.update('bassp', { quantity : 3 })
// ItemManager.delete('bassp')
// console.log(ItemManager.items());
// console.log(ItemManager.inStock());
// console.log(ItemManager.itemsInCatergory('cooking'))
console.log(ItemManager)
