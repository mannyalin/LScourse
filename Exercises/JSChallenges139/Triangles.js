//create a program that determines if a triangle is an isosceles, scalene, or equilateral
// input: 3 lengths?
// output: string labels which triangle
// for a shape to be a triangle sum of two sides have to be greater than the third side. 

//create a class that takes in 3 lengths 
//for it to be a triangle, two lengths have to be greater than the 3rd
// create function that takes in the object triangle as an argument
// test what type of triangle


class Triangle {

  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
}

let testTriangle = new Triangle(3, 5, 7)

console.log(testTriangle);

function typeTriangle(triangleObject) {
  if (triangleObject.side1 === triangleObject.side2 && triangleObject.side2 === triangleObject.side3) {
    return 'Equilateral';
  } else {
  if (triangleObject.side1 === triangleObject.side2 || triangleObject.side1 === triangleObject.side3 || triangleObject.side2 === triangleObject.side3) {
    return 'Isosceles';
  } else {
    return 'Scalene';
  }
}
}

