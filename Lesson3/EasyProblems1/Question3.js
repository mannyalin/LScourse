// Question 3: Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

let keys = Object.keys(ages);

keys.includes('Spot')

Object.prototype.hasOwnProperty()

ages.hasOwnProperty('Spot');
