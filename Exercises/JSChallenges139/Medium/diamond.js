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
 - for each letter create how much padding and space it needs, and concatenate '\n'  (create helper functions)
    
    - then push what has been created to a collection of these letters with their spaces and '\n' (' B B \n')
- reverse iteration but without the widest width letter and repeat procedure
- convert array to string and return the string value. 

helper functions:
to create how much padding on each side
 - 

to create how much space in between

to figure out how many characters max width



*/

class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static lettersRange() {
    let range = [];

    for (let i = 0; i <= this.alphabet.indexOf(letter.toUpperCase()); i++) {
      range.push(this.alphabet[i]);
    }
      range = [...lettersRange, ...lettersRange.reverse().slice(1)]
    
    return range;
  }



  static makediamond(letter) {
    
    range = this.lettersRange();

    range.forEach(letter => {
      
    })
  }
}

Diamond.makediamond('c');
