// 1. Display the empty squares of 3x3 board.
// 2. Ask the user to mark a square.
// 3. computer marks a square
// 4. display the updated state of the board
// 5. If there is no winner, repeat from step 2
// 6. If the board is full and there is no winner, declare a tie.
// 7. If there is a winner, declare the winner.
// 8. Ask if play again?
// 9. If yes, repeat from step 1.
// 10. If no, end game. Bye.


// write a function that receives an array, an optional delimeter that defaults to a comma followed by a space, and a string that defaults to 'Or'

// joinOr([1, 2, 3]);               // => "1, 2, or 3"
// joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
// joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
// joinOr([]);                      // => ""
// joinOr([5]);                     // => "5"
// joinOr([1, 2]);                  // => "1 or 2"

// Delimeter is optional and returns ',' when omitted
// word connector is the third argument, is optional and defaults to 'or'
// Passing an empty array returns empty string
// Passing one element in the array, returns that one element as a string
// Passing two elements in the array, returns 