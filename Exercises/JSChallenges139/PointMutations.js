/*
Receive two strings as arguments
compare element on each string index for equality up to the point where each has an element
if not equal on an index, increase a counter
return counter;
*/

function hamming(string1, string2) {
  stringarr1 = string1.split('');
  stringarr2 = string2.split('');
  let num = stringarr1.filter((string, index) => string !== stringarr2[index]);
  return num.length;
}

let DNA1 = 'GAGCCTACTAACGGGAT';
let DNA2 = 'CATCGTAATGACGGCCT';

console.log(hamming(DNA1, DNA2));
