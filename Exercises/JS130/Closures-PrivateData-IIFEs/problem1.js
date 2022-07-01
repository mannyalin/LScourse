function myBind1(func, ctx) {
  (...args) => func.apply(ctx, args)
}

function myBind(func, objBind) {
  return function() {
    return func.apply(objBind, arguments)
  }
}

