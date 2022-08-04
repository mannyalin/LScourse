function myBind(func, ctx) {
  return function(...args) {
    return func.call(ctx, ...args);
  };
}

function myBind2(func, ctx, ...partialArgs) {
  return (...remainingArgs) => {
    let completeArgs = [...partialArgs, ...remainingArgs]
    return func.call(ctx, ...completeArgs)
  }
}

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind2(addNumbers, null, 5);

console.log(addFive(10)); // 15

