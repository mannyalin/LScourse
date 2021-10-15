// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// Bonus:

// How can you reliably test if a value is NaN?

/*
NaN does not strictly equal or loosely equal NaN so the output will be false. To check whether a value is NaN you can use the method Number.isNaN().
*/