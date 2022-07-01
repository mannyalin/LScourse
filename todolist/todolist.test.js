const Todo = require('../todo/todo.js');
const TodoList = require('./todolist.js');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  })

  test('calling toArray returns the list in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  })

  test('calling first returns the first todo in the todolist', () => {
    expect(list.first()).toEqual(todo1);
  })

  test('calling last returns the last todo in the todolist', () => {
    expect(list.last()).toEqual(todo3);
  })

  test('calling shift removes and returns first item in the list', () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3])
  })

  test('calling pop removes and returns last item in the list', () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2])
  })

  test('isDone() returns true if all todos are marked done, false otherwise', () => {
    expect(list.isDone()).toBe(false);
  })

  test('passing a non todo item to add() will throw a TypeError', () => {
    let newlist = new TodoList('test');
    expect(() => list.add(1)).toThrow(TypeError);
    expect(() => list.add('hi')).toThrow(TypeError);
    expect(() => list.add(newlist)).toThrow(TypeError);
  })

  test('itemAt() returns item at index, or throws ReferenceError if we pass an index with no element', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(() => list.itemAt(4)).toThrow(ReferenceError);
  })

  test('markDoneAt marks the element in the given index as isDone', () => {
    expect(() => list.markDoneAt(9)).toThrow(ReferenceError);

    list.markDoneAt(1);
    expect(todo2.isDone()).toBe(true)
  })
});