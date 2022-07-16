/*
Program determines what type of triangle:

Use class `Triangle` takes 3 arguments.
Arguments are three numbers.
Each argument is assigned to a `this.side`.
 - test for errors
If all three sides length are zero.
If any two sides sum is less than the remaining side.
If any sides have a negative value.

create `kind` method that will determine the type of triangle.
method will check the relationship of the values of sides.
Then from that decide based on the given rules what type it is.
if two side equal - isosceles
if no sides are equal - scalene
if all three sides are equal - equilateral.
*/

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    //check if any are against the rules:
    if (this.side1 === 0 && this.side2 === 0 && this.side3 === 0) throw new Error('can not have zero lengths');
    if (this.side1 + this.side2 <= this.side3 || this.side1 + this.side3 <= this.side2 || this.side2 + this.side3 <= this.side1) throw new Error('inequality error');
    if ([this.side1, this.side2, this.side3].some(side => side < 0)) throw new Error('no negatives');
  }

  kind() {
    if (this.side1 === this.side2 && this.side1 === this.side3 && this.side2 === this.side3) {
      return 'equilateral';
    } else if (this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3) {
      return 'scalene';
    } else {
      return 'isosceles';
    }
  }
}

module.exports = Triangle;