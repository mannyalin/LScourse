/* eslint-disable max-len */
/*
Calculate Hamming distance between two DNA strands:

Hamming distance: number of point mutations
class `DNA` takes one argument: the original DNA strand

`hammingDistance` method takes one argument: DNA strand to compare.
Both are strings that have UPPERCASE letters of the bases.

Original string should remain unmutated when comparing, even if different lengths are used.

empty strands returns zero hamming distance
identical strands equal zero

check which strand is shorter: base the for loop criteria to the shorter length.



*/

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(distance) {
    if (this.strand.length === 0 && distance.length === 0) {
      return 0;
    }
    if (this.strand === distance) {
      return 0;
    }

    let counter = 0;
    if(this.strand.length < distance.length) {
      for (let idx = 0; idx < this.strand.length; idx++) {
        if(this.strand[idx] !== distance[idx]) counter += 1;
      }
    } else {
      for (let idx = 0; idx < distance.length; idx++) {
        if(this.strand[idx] !== distance[idx]) counter += 1;
      }
    }
    return counter;
  }
}

module.exports = DNA;