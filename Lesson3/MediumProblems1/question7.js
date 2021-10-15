// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

// 34. answer is a variable pointed to the value of 42 and was not involved in the messWithIt function or the newAnswer varaialbe. Therefore answer - 8 is 42 -8 which is equal to 34.