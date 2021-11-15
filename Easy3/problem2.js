/*
P Write a function that will take a short line of text and display that text in the console within a box.

E
logInBox('To boldly go where no one has gone before.');
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
logInBox('');
+--+
|  |
|  |
|  |
+--+

blank creates 4 x 5 box with symbols as show above
the width space is kept 4 units and the text is added in between, also added to the width with hyphens
empty string returns original 4x 5 box


D: input: string
   output : string with box design multiple console log creating box 

Algo:
 
create a function that has multiple console.logs as shown below and takes one string argument str.
print out using console.log():
 `+-'-'.-+` on first line
 `| ' '.repeat(${str.length}) |` on the second
`| ${str} |` on the third
`|  |` on the fourth
`+--+` on the fifth

*/ 

function logInBox(str) {
  console.log(`+-${'-'.repeat(str.length)}-+`);
  console.log(`| ${' '.repeat(str.length)} |`);
  console.log(`| ${str} |`);
  console.log(`| ${' '.repeat(str.length)} |`);
  console.log(`+-${'-'.repeat(str.length)}-+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('testing test test')
logInBox(' ');
logInBox('');
logInBox('[ check ing it ]');
