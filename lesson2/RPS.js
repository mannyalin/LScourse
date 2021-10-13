const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidUserInput(input) {
  input = input.trim().toLowerCase();
  return !['rock', 'paper', 'scissors'].includes(input);
}

while (true) {
  prompt('Welcome To Rock, Paper, Scissors!');

  prompt('Choose one: Rock, Paper, or Scissors');
  let userChoice = readline.question();
  while (invalidUserInput(userChoice)) {
    prompt('Please choose only one of the following: Rock, Paper, Scissors');
    userChoice = readline.question();
  }

  let random = Math.ceil(Math.random() * 3);
  let compChoice;
  switch (random) {
    case 1:
      compChoice = 'Rock';
      break;
    case 2:
      compChoice = 'Paper';
      break;
    case 3:
      compChoice = 'Scissors';
      break;
  }

  console.log(`Player's ${userChoice} vs Computer's ${compChoice}`);
  if ((userChoice === 'Rock' && compChoice === 'Scissors') ||
      (userChoice === 'Paper' && compChoice === 'Rock') ||
      (userChoice === 'Scissors' && compChoice === 'Paper')) {
    console.log('Player Wins!');
  } else if ((userChoice === 'Rock' && compChoice === 'Paper') ||
  (userChoice === 'Paper' && compChoice === 'Scissors') ||
  (userChoice === 'Scissors' && compChoice === 'Rock')) {
    console.log('Computer Wins!');
  } else {
    console.log('It\'s a Tie!!!');
  }
  prompt('Would you like to play again? (y/n)');
  let playAgain = readline.question();
  while (!['y','n'].includes(playAgain.trim().toLowerCase())) {
    prompt('Would you like to play again? Please choose only y or n');
    playAgain = readline.question();
  }

  if (playAgain === 'n') break;
}
