// function newStack() {
//   let stack =[];
//   return {
//     push(value) {
//       stack.push(value);
//     },

//     pop(value) {
//       stack.pop(value);
//     },

//     printStack(value) {
//       stack.forEach(value => {
//         console.log(value);
//       })
//     }
//   }
// }

// create a function `newStack` that creates a stack object with three methods: `push`, `pop`, `printStack`
//`push` takes a value and appends it to the end of the stack.
//`pop` removes the last element of the stack , and also returns it.
// `printStack` logs elements on the stack, each gets their own line, starting from least recent to most recent added.
// use array to implent stack and make sure it is not accesibled from outside the methods.

function newStack() {
  let stack = [];
  return {
    push(val) {
      stack.push(val);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(el => {
        console.log(el);
      })
    }
  }
}

