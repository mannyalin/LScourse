const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINSCORE = 5;
const WINNINGLINES = [
  [1, 2, 3], [4, 5, 6,], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board){
  console.clear();

console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`)

  console.log('');
console.log('     |     |');
console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
console.log('     |     |');
console.log('-----+-----+-----');
console.log('     |     |');
console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
console.log('     |     |');
console.log('-----+-----+-----');
console.log('     |     |');
console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
console.log('     |     |');
console.log('');
}

function initializeBoard() {
  let board = {};
  
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function joinOr(arr, delimeter = ', ', lastDelimeter = 'or ') {
  let emptyChoices = '';
  for (let i = 0; i <= arr.length -2; i++) {
    emptyChoices += arr[i] + delimeter;
  }
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 2) {
    return `${arr[0]} ${lastDelimeter} ${arr[1]}`;
  } else {
    return emptyChoices + lastDelimeter + arr[arr.length - 1];
  }
}
 
function playerChoosesSquare(board) {
  let square;
    
  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    
    if (emptySquares(board).includes(square)) break;
     
    prompt("Sorry, that is not a valid choice.");
  }
  return board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  for (let line = 0; line < WINNINGLINES.length; line++) {
    let [sq1, sq2, sq3] = WINNINGLINES[line]

    if (
        board[sq1] === ' ' &&
        board[sq2] === COMPUTER_MARKER &&    
        board[sq3] === COMPUTER_MARKER ) {
          return board[sq1] = COMPUTER_MARKER;
      } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === ' ' &&    
        board[sq3] === COMPUTER_MARKER ) {
          return board[sq2] = COMPUTER_MARKER;
      } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&    
        board[sq3] === ' ' ) {
          return board[sq3] = COMPUTER_MARKER;
      } else if (
        board[sq1] === ' ' &&
        board[sq2] === HUMAN_MARKER &&    
        board[sq3] === HUMAN_MARKER ) {
          return board[sq1] = COMPUTER_MARKER;
      } else if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === ' ' &&   
        board[sq3] === HUMAN_MARKER ) {
          return board[sq2] = COMPUTER_MARKER;
      } else if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&    
        board[sq3] === ' ') {
          return board[sq3] = COMPUTER_MARKER;
        }
      }     
    
      if (board['5'] === ' ' ) {
        board['5'] = COMPUTER_MARKER;
      } else {
        let randomIndex = Math.floor(Math.random() * emptySquares.length);
        let square = emptySquares(board)[randomIndex]
        board[square] = COMPUTER_MARKER;  
      }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNINGLINES.length; line++) {
    let [sq1, sq2, sq3] = WINNINGLINES[line]

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&    
        board[sq3] === HUMAN_MARKER    
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

    return null;
}

while (true) {
  let playerScore = 0;
  let computerScore = 0;
  
  while (true) {
    let board = initializeBoard();
    
    while (true) {
      displayBoard(board);
      
      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;  
    }
    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} earns a point!`);
      detectWinner(board) === 'Player' ? playerScore += 1 : computerScore +=1;
    } else {
      prompt("It's a tie!");
    }
    console.log(`Player : ${playerScore}\nComputer : ${computerScore}`)

    prompt(`Ready for next round?`)
    let nextRound = readline.question().toLowerCase().trim();
    if (nextRound === 'n') break;
  
    if (playerScore === WINSCORE || computerScore === WINSCORE) break;

  }
  console.log(playerScore === WINSCORE ? 'Player Won!' : 'Computer Won!')

  prompt('Play again? (Y or N)');
  let answer = readline.question().toLowerCase().trim();
  while (!(answer === 'y' || answer === 'n')) {
    prompt(`That is not a valid choice, Choose only Y or N`);
    answer = readline.question().toLowerCase().trim();
  }

  if (answer === 'n') break;
}

prompt('Thanks for playing Tic Tac Toe!')

