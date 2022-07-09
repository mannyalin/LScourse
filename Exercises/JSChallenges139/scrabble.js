/*
Create a program that calculates the points for a scrabble word:

The class constructor gets one argument, a string word
save the word in the new object
There is a chart that shows how much points each letter is worth: create an object that has the alphabet as key and its points as its value.
create a method that calculates the points of the object's word.

create a variable `lettersArr` from splitting `this.word` into an array of letters
create `totalPoints` and set it to 0.
Iterate over the `lettersArr`
- For each letter use the letter as the key in the Alphabet points and get the point value
- add the point value to `totalPoints
end iteration
return totalPoints.

*/

class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static alphabetPoints = {
    'A': 1,
    'B': 3,
    'C': 3,
    'D': 2,
    'E': 1,
    'F': 4,
    'G': 2,
    'H': 4,
    'I': 1,
    'J': 8,
    'K': 5,
    'L': 1,
    'M': 3,
    'N': 1,
    'O': 1,
    'P': 3,
    'Q': 10,
    'R': 1,
    'S': 1,
    'T': 1,
    'U': 1,
    'V': 4,
    'W': 4,
    'X': 8,
    'Y': 4,
    'Z': 10,
  }

 score() {
   let totalPoints = 0;

   if(this.word && !this.word.includes(' \t\n') ) {
     let lettersArr = this.word.toUpperCase().split('');
    
     lettersArr.forEach(element => {
       totalPoints += Scrabble.alphabetPoints[element]
     });
   }

   return totalPoints;
 }

 static score(word) {
  let totalPoints = 0;

   if(word) {
     let lettersArr = word.toUpperCase().split('');
    
     lettersArr.forEach(element => {
       totalPoints += Scrabble.alphabetPoints[element]
     });
   }

   return totalPoints;
 }
}

let test = new Scrabble('Scrabble');
console.log(test)
console.log(test.score());

module.exports = Scrabble;