function newStack() {
  let stack =[];
  return {
    push(value) {
      stack.push(value);
    },

    pop(value) {
      stack.pop(value);
    },

    printStack(value) {
      stack.forEach(value => {
        console.log(value);
      })
    }
  }
}