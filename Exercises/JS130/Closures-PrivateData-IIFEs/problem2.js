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