function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// first returns the object { prop1: "hi there"}
// second returns undefined because return stops the function without returning anything. The semicolon is added after return and ends the expression. Javascript assumes where it should be placed and becasue of the brackets being on the next line, it makes it seem like the expression is done. 