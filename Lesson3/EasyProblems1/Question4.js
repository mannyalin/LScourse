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
