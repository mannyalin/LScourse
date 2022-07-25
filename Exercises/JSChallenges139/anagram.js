/*
Two input: first is a word and the second is an array of words.
Second array are possibly anagrams of the first word.

An anagram will have the same length and same exact letters.
check if it repeats because if same amount of letters, it will
need to have the same exact letters or else it will have more characters?

Will also need to eliminate equal words.

Algo:

write a class 'Anagrams' that takes two arguments:
The first is word and save that as 'word'
The second is an array of words saved as 'possibleAnagrams'

create helper methods: 'isSameLength', 'isSameWord', sortedEqual
Create a method named 'match'
- filter through `possibleAnagrams`
  - if isSameLength
  - if not isSameWord
  - and if sortedEqual.
*/

class Anagram {
  constructor(word) {
    this.word = word;
  }

  // isSameLength(currentWord) {
  //   return currentWord.length === this.word.length;
  // }

  isNotSameWord(currentWord) {
    return currentWord.toLowerCase() !== this.word.toLowerCase();
  }

  sortedEqual(currentWord) {
    let currentWordArr = currentWord.toLowerCase().split('');
    let wordArr = this.word.toLowerCase().split('');
    return currentWordArr.sort().join() === wordArr.sort().join();
  }

  match(possibleAnagrams) {
    return possibleAnagrams.filter(currentWord => {
      return this.isNotSameWord(currentWord) &&
             this.sortedEqual(currentWord);
    });
  }
}

module.exports = Anagram;