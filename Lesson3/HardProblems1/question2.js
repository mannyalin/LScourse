// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);


// object["first"] references a pointer that points to [1]
// numArray assigned the pointer to [1]
// when numArray.push(2) is called , the 2 is pushed to the original array [1] because it is pointed to the original array. So if that array is mutated object is now equal to { first: [1] }