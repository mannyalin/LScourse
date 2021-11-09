/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable no-return-assign */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINSCORE = 5;
const WINNINGLINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7],
];

let currentPlayer = 'Player';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
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
  // eslint-disable-next-line prefer-const
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === ' ');
}

function joinOr(arr, delimeter = ', ', lastDelimeter = 'or ') {
  let emptyChoices = '';
  for (let idx = 0; idx <= arr.length - 2; idx += 1) {
    emptyChoices += arr[idx] + delimeter;
  }
  if (arr.length === 0) {
    return '';
  } if (arr.length === 1) {
    return arr[0];
  } if (arr.length === 2) {
    return `${arr[0]} ${lastDelimeter} ${arr[1]}`;
  }
  return emptyChoices + lastDelimeter + arr[arr.length - 1];
}

function playerChoosesSquare(board) {
  let square;
  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt('Sorry, that is not a valid choice.');
  }
  board[square] = HUMAN_MARKER;
}

// eslint-disable-next-line consistent-return
// eslint-disable-next-line complexity
function computerChoosesSquare(board) {
  for (let line = 0; line < WINNINGLINES.length; line++) {
    let [sq1, sq2, sq3] = WINNINGLINES[line];

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
          // eslint-disable-next-line no-return-assign
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
        let square = emptySquares(board)[randomIndex];
        return board[square] = COMPUTER_MARKER;  
      }
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'Player') {
    playerChoosesSquare(board);
  } else if (currentPlayer === 'Computer') {
    computerChoosesSquare(board);
  }
}

function alternatePlayer() {
  if (currentPlayer === 'Player') {
    return 'Computer';
  } else {
    return 'Player';
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNINGLINES.length; line++) {
    let [sq1, sq2, sq3] = WINNINGLINES[line];
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

function someoneWon(board) {
  return detectWinner(board);
}
let answer; 

while (answer !== 'n') {
  let playerScore = 0;
  let computerScore = 0;

  prompt('Who should go first? Player or Computer');
  currentPlayer = readline.question();
  while ((!(currentPlayer === 'Player' || currentPlayer === 'Computer'))) {
    prompt('Sorry that is not valid. Choose Player or Computer');
    currentPlayer = readline.question();
  }

  while (!(playerScore === WINSCORE || computerScore === WINSCORE)) {
    let board = initializeBoard();

    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer();
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} earns a point!`);
      if (detectWinner(board) === 'Player') {
        playerScore += 1;
      } else if (detectWinner(board) === 'Computer') {
        computerScore += 1;
      }
    }

    if (boardFull(board)) {
      prompt('It"s a tie!');
    }

    prompt(`Player : ${playerScore}  Computer : ${computerScore}`);

    prompt('Ready for next round? Press any key to continue');
    readline.question().toLowerCase().trim();
  }
  console.log(playerScore === WINSCORE ? `Player has reached ${WINSCORE} points and has Won the Game!` : `Computer has reached ${WINSCORE} points and has won the game!`);

  prompt('Play again? (Y or N)');
  answer = readline.question().toLowerCase().trim();
  while (!(answer === 'y' || answer === 'n')) {
    prompt('That is not a valid choice, Choose only Y or N');
    answer = readline.question().toLowerCase().trim();
  }
}

prompt('Thanks for playing Tic Tac Toe!');