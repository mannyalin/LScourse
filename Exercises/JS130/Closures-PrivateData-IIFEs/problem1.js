function myBind(func, objBind) {
  return function() {
    return func.apply(objBind, arguments)
  }
}