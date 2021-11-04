
// Set a variable and initialize it with an empty string. This is where the characters will be stored that have a common prefix. 
// Sort the array of strings from shortest to longest.
// Iterate through each character of the shortest word.
// Do all the other words have matching letters on the same index as the shortword?
//  - If no break;
//  - If yes, concatenate that letter to the variable that was set for the common prefix.
// Return the common prefix variable.

function commonPrefix(arrStrings) {
  let longestPrefix = '';
  let shortestWord = arrStrings.sort((a,b) => a.length - b.length).shift();
  
  for(let index = 0; index < shortestWord.length; index += 1) {
    if (!arrStrings.every(word => word[index] === shortestWord[index])) break;
      longestPrefix += shortestWord[index];
  }
  return longestPrefix;
}

console.log(commonPrefix(["flower","flow","flight"]));
console.log(commonPrefix(["dog","racecar","car"]));
console.log(commonPrefix(["carefree","mandible","manny"]));