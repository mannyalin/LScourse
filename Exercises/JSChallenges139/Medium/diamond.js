//create a class `Diamond` with a static method `makeDiamond` that takes one letter of the alphabet as its argument
// `makeDiamond` prints a diamond starting with 'A', with the supplied letter at the widest point
// The letters form a diamond shape
/*

-First row contains one 'A'
-last row contains one 'A'
-All rows except the first and last have exactly two identlical letters
- The diamond has  a square shape(width equals height)
- The top half has the letters in ascending order
- the bottom half has the letters in descending order

Analyzing example:

    A           // First row always start with 'A', 4 spaces to pad,  spaces and amount of letters are all adding up to 9 spaces, 
   B B          // 1 space in between,              3 spaces to pad   what determines 9 spaces here, 5th letter (pattern of 1, 3, 5, 7, 2n - 1)        
  C   C         // 3 spaces in between              2 spaces to pad   there's always 2 letters after 'A' so spaces would be (2n - 3)
 D     D        // 5 spaces in between              1 space to pad    create space in between letters is (2n - 3) n being the position of the letter in alphabet plus 1 if in array. 
E       E       // 7 spaces in between              0 space to pad    
 D     D
  C   C                                                                To pad, we need ((2n - 1) - (2c - 1)) / 2 n is the parameter position, c is the current letter position
   B B
    A           // Always ends with A

From one of the Jest:
let expected = "  A  \n" +
               " B B \n" +
               "C   C\n" +
               " B B \n" +
               "  A  \n";


create a class `Diamond` with a static method `makeDiamond` that takes one letter of the alphabet as its argument
- input string (one letter)
- output string (diamond shape of made of letters as shown)


-Take the letter and use that to create the letters that we will use (ex: argument 'C' , letters will be A, B ,C . make a list or letters using array)
-iterate through the letter list 
 - for each letter create how much padding and space it needs, and concatenate '\n'(can do it when using `join` method)  (create helper functions)
    
    - then push what has been created to a collection of these letters with their spaces and '\n' (' B B \n')
- reverse iteration but without the widest width letter and repeat procedure
- convert array to string and return the string value. 

helper functions:
static maxLetterIdx = alphabet.indexOf(maxLetter) + 1
static currLetterIdx = alphabet.indexOf(letter) + 1

to figure out how many characters max width
- 2 * letterParameterPosition - 1
maxWidth(letter) {
  let alphaPosition = this.alphabet.indexOf(letter) + 1;
  let max = (2 * alphaPosition) - 1; 
}

to create how much padding on each side
 - ((2 * maxLetter) - 1) - (2 * currentLetter - 1)) / 2
addPad(maxLetter, letter) {
  let padSpace = ((this.maxLetterIdx - 1) - (2 * this.currentLetterIdx - 1 )/ 2
  let pad = ' '.repeat(padSpace)
  return pad
}
  let pad = ' '.repeat(maxWidth - (2 * this.alphabet.indexOf(letter)))/ 2
  return pad + fromMakeRow + pad

} 

to create how much space in between
 - (2 * currentLetterPosition) - 3
addBetween(letter) {
if(letter === 'A') return  'A'

  let midspace = ' '.repeat((2 * this.currLetterIdx - 3)
  return letter + midspace + letter;
}


addPad(maxLetter, letter) +  addbetween(letter)  + addPad(maxLetter, letter)



*/

class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static lettersRange(letter) {
    let range = [];

    for (let i = 0; i <= this.alphabet.indexOf(letter); i++) {
      range.push(this.alphabet[i]);
    }
      range = [...range, ...range.reverse().slice(1)]
    
    return range;
  }

  static addPad(maxLetter, letter) {
    let maxLetterIdx = this.alphabet.indexOf(maxLetter) + 1;
    let currLetterIdx = this.alphabet.indexOf(letter) + 1;
    let padSpace = (((2* maxLetterIdx) - 1) - ((2 * currLetterIdx) - 1))/ 2;
    let pad = ' '.repeat(padSpace)
    return pad
  }

  static addSpaceBtwn(letter) {
    if(letter === 'A') return 'A';

    let currLetterIdx = this.alphabet.indexOf(letter) + 1;
    let space = ' '.repeat((2 * currLetterIdx) - 3);
    return letter + space + letter;
  }

  static makeDiamond(maxLetter) {
    // if (maxLetter === 'A') return 'A\n';
    
    let diamond = [];
    let range = this.lettersRange(maxLetter);
    range.forEach(letter => {
      diamond.push(this.addPad(maxLetter,letter) + this.addSpaceBtwn(letter) + this.addPad(maxLetter, letter));
    })
    diamond = diamond.join('\n')
    console.log(diamond)
    return `${diamond}\n`;
  }
}

Diamond.makeDiamond('C');

module.exports = Diamond;