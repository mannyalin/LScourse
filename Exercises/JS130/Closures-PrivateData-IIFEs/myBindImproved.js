function myBindPart(ctx, func) {
  let partialArguments = [].slice.apply(arguments, [2]);
  return function() {
    let restOfArgs = [].slice.apply(arguments);
    let fullArgs = partialArguments.concat(restOfArgs)
    func.apply(ctx, fullArgs);
  }
}

function myBindPartial(ctx, func, ...args) {
  let partialArgs = args;
  return (...nextArgs) => {
    let restOfArgs = nextArgs
    let fullArgs = partialArgs.concat(restOfArgs)
    func.apply(ctx, fullArgs)
  }
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































function myBind() {

}