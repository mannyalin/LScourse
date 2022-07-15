function makeList() {
  let todos = [];
  return function(todo) {
    if (todo) {
      let todoindex = todos.indexOf(todo);
      if (todos.includes(todo)) {
      todos.splice(todoindex,1);
      console.log(1)
      } else {
        console.log(2)
      todos.push(todo);
    }
  } else if (todos.length === 0) {
      console.log(3)
      console.log('the list is empty')
    } else {
      console.log(4)
      todos.forEach(todo => console.log(todo))
    }
  }
}

let list = makeList();
// console.log(list());
// // The list is empty.

 console.log(list("make breakfast"));
// make breakfast added!

 console.log(list("read book"));
// read book added!

 console.log(list());
// make breakfast
// read book

 console.log(list("make breakfast"));
// make breakfast removed!

 console.log(list());
// read book