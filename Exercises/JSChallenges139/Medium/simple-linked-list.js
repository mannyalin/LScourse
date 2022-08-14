/*
create a singly linked list.
range of data is numbers 1-10
Provide functions to reverese the list and convert to and from an array.

Info from reading about linked list online:
each element is called a node
first node is the head
last node is the tail

From Jest requirements:
create a class `Element` and `SimpleLinkedList` that takes two arguments: a datum(1- 10), and an element object default to `null`
method `datum` returns datum of the element instance that called it
method `isTail` returns true if the element that called it is the last element
method `next` returns `null` if the element that called it is the last element
 - if we create another element2, that becomes the head and element1 is tail. So if we call next with element2 (element2.next()), it should return `element1`

We create a new instance of a list by calling `SimpleLinkedList` with the `new` keyword. (let list = new SimpleLinkedList())
- method `size` returns how many elements are in the new list. It equals zero if we haven't added any to the list. But once we push nodes in, it will tell give us a count of how many nodes are in the list. 
  - starting from the `head`, we can increment by 1 if `head` has a value.
  - The pattern is the same after that, which is if its `next` has a value, we continue. But since we started with checking if `head` has value and it's the same structure, we could make a variable for `head` and reassign that variable with `head's next` value, and check if that has value.
- method `isEmpty` returns `true` if there are no elements in the list yet.
- method `push` takes one argument, a number. If we pass in `1` and call `size` again on the same instance, it will now equal 1, and `isEmpty` will now be false
  - we need to create a new element using the class `Element` and passing in two arguments, a `datum` and existing `head` if there is already `head` in the instance list as second argument
- method `peek` seems to be similar to `size` , except that when it is empty it returns `null` instead of `0`.
- `head` method returns the head element, so it is an insteand of class `Element`. This means that `push` takes `datum` as an argument and then creates an instance of `Element` with that `datum`
  - return value of head(instance of Element) can now call the methods of an `Element` instance like `datum` and `isTail`
  - And as usual, the pattern of the elements are stacked. 1 is added first, 2 is added next. 2 becomes the head.
- method `pop` removes the head of the list, the last one in.
- method `fromArray` takes an Array as an argument and creates a node for each element of the array, starting from last element. So the first element of the array becomes head, and last element of the array becomes tail.
- passing an empty array creates an emtpy list, and passing null, creates a size 0 and peek null
- `toArray` method converts linked list data to fill an array. SAme order as what it came in as array into `fromArray` method.
- `reverse` reverses the orders of the list

class `Element` takes two arguments (datum(number), object (default null)) and returns an object
- number is set to `this.datum`
- object is set to `this.next`
-create the methods above available in the instance prototype

class `SimpleLinkedList` takes no arguments and returns an empty object with methods listed above in its prototype

*/

class Element {
  constructor(nodeDatum, nextNode = null) {
    this.nodeDatum = nodeDatum;
    this.nextNode = nextNode;
  }

  datum() {
    return this.nodeDatum;
  }

  isTail() {
    return this.nextNode === null
  }

  next() {
    return this.nextNode;
  }

  
}


class SimpleLinkedList {

  size() {
    let size = 0;
    let currListHead = this.listHead;
    while(currListHead) {
      size++;
      currListHead = currListHead.next();
    }
    return size;
  }

  isEmpty() {
    return !this.listHead
  }

  push(datum) {
    let node = new Element(datum, this.listHead)
    this.listHead = node;
  }

  peek() {
    let head = this.head();
    return head ? head.datum() : null;
  }

  head() {
    return this.listHead;
  }

  pop() {
    let popped = this.listHead.datum();
    this.listHead = this.listHead.next();
    return popped;
  }

  static fromArray(arr) {
    
    if(arr === null || arr.length === 0) {
      return new SimpleLinkedList();
    } else {
      let arrCopy = [...arr]
      //reverse array 
      //iterate through array
      //use list `push` method to push current number
      let list = new SimpleLinkedList();
      arrCopy.reverse().forEach(num => list.push(num));
      return list;
    }
  }

  toArray() {
    let arrayResult = [];
    let currListHead = this.head();
    while(currListHead) {
      arrayResult.push(currListHead["nodeDatum"]);
      currListHead = currListHead.next();
    }
    return arrayResult ;
  }

  reverse() {
    let reversedList = new SimpleLinkedList();
    let currListHead = this.head();
    while(currListHead) {
      reversedList.push(currListHead.datum());
      currListHead = currListHead.next();
    }
    return reversedList;
  }
}



let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let list = SimpleLinkedList.fromArray(data);
console.log(list)
console.log(data.reverse());
console.log(list.reverse());

module.exports = { Element, SimpleLinkedList };