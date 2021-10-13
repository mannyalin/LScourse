// Question 1
let numbers = [5, 7, 9];
numbers[6] = 5;
numbers[4];

// no errors. It will treat the skipped spaces as empty. numbers[4] will show as undefined.

// Question 2 How to determine whether a given string ends with an exclamation mark?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

str1.endsWith('!')

// Question 3: Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

let keys = Object.keys(ages);

keys.includes('Spot')

Object.prototype.hasOwnProperty()

ages.hasOwnProperty('Spot');

// Question 4
// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";

let newString = munstersDescription.slice(0,1).toUpperCase() + munstersDescription.slice(1).toLowerCase();

console.log(newString)

// => The munsters are creepy and spooky.

// Get a string
// Create new string with all lowercase except first character
// Slice the first letter of the string and make it uppercase.
// Concatenate the rest of the string as lower case.

munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();

// Question 5
// What will the following code output?
console.log(false == '0'); // true
console.log(false === '0'); //false
// non-strict equality operators coerces the values to the same type before comparing them. The example above coerces false into the number 0 and the strin '0' into the number 0 before comparing them. 

// The strict equality operator does not coerce the operators therefore they have to be equal in value and type to be true.

// Question 6
// We have most of the Munster family in our ages object:
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 };

ages['Marilyn']= 22, 
ages['Spot']= 237

Object.assign(ages, additionalAges);

// Question 7
// Determine whether the name Dino appears in the strings below -- check each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

str1.includes('Dino');
str2.includes('Dino');

// Question 8
// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino');
flintstones[6] = ('Dino');
flintstones[flintstones.length] = 'Dino';
flintstones.concat('Dino')

// In the previous problem, our first answer added 'Dino' to the array like this:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");

// How can we add multiple items to our array? ('Dino' and 'Hoppy')

flintstones.concat('Dino','Happy')
flintstones.push('Dino', 'Hoppy')

// Question 10
// Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
advice.slice(0,advice.indexOf('house'))