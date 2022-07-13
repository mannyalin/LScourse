/*
Write a program that generates the lyrics of the song  `99 Bottles of Beer`

Use class `BeerSong` that has three methods required:
verse, verses, lyrics.

verse takes a number as an argument. The number is the starting amount of beer and will deduct it by one with the expected string output:

"99 bottles of beer on the wall, 99 bottles of beer.\n" + "Take one down and pass it around, 98 bottles of beer " + "on the wall.\n"
  - same for all verse except when it hits 0 bottles.
    - 0 bottles as resulting number returns: "Take it down and pass it around, no more bottles " +
                   "of beer on the wall.\n";

    - 0 bottles as argument returns:
      "No more bottles of beer on the wall, no more " +
                   "bottles of beer.\nGo to the store and buy some " +
                   "more, 99 bottles of beer on the wall.\n";

verses: 
takes 2 arguments, calls verse through the range of arguments inclusive.


lyrics:  calls verse from [99 - 0];

Algo: 

create class `BeerSong` and create static method verse.
verse takes `numBeer`, a number input, as an argument.
if `numBeer` > 1 : return first line with numBeer being deducted by 1 for second line.
if `numBeer` === 1 : return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
                   "Take it down and pass it around, no more bottles " +
                   "of beer on the wall.\n";

if `numBeer` === 0 :"No more bottles of beer on the wall, no more " +
                   "bottles of beer.\nGo to the store and buy some " +
                   "more, 99 bottles of beer on the wall.\n";


*/

class BeerSong {
  static verse(numBeer) {
    if(numBeer > 2) {
      return numBeer + " bottles of beer on the wall, " + numBeer + " bottles of beer.\n" +
      "Take one down and pass it around, " + (numBeer - 1) + " bottles of beer " +
      "on the wall.\n";
    } else if (numBeer === 2) {
      return "2 bottles of beer on the wall, 2 bottles of beer.\n" +
      "Take one down and pass it around, 1 bottle of beer " +
      "on the wall.\n"
    } else if (numBeer === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
      "Take it down and pass it around, no more bottles " +
      "of beer on the wall.\n"
    } else {
      return "No more bottles of beer on the wall, no more " +
      "bottles of beer.\nGo to the store and buy some " +
      "more, 99 bottles of beer on the wall.\n";
    }
  }

  static verses(beerStart, beerEnd) {
    let song = []
    for (let numBeer = beerStart; numBeer >= beerEnd; numBeer--) {
      song.push(this.verse(numBeer));
    }

    return song.join('\n');
  }

  static lyrics() {
    let song = [];
    for (let numBeer = 99; numBeer >= 0; numBeer--) {
      song.push(this.verse(numBeer));
    }

    return song.join('\n')
  }

}

module.exports = BeerSong;