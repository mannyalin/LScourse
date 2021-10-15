// Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

// For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:

/* 
Given a string, output the string 10 times
First with no space in front
the next output should have one space
The next after that has two spaces 
The next has three and so on...

START
SET str = value of given string
SET i = 0
WHILE i <= 9 PRINT str.padStart(i + str.length)
*/

let str = 'The Flinstones Rock!';
for (let i = 0; i <= 9; i += 1) {
  console.log(str.padStart(i + str.length))
}

for (let padding = 1; padding <= 10; padding ++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}


