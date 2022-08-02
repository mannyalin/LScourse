function myBind(func, ctx) {
  return function(...args) {
    return func.call(ctx, ...args);
  };
}

