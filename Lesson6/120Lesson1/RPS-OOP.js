const readline = require('readline-sync');

// function createPlayer(playerType) {
//   return {
//     playerType: playerType,
//     move: null,

//     choose() {
//       if (this.isHuman()) {
//         let choice;

//         while (true) {
//           console.log('Please choose rock, paper or scissors:');
//           choice = readline.question();
//           if (['rock', 'paper', 'scissors'].includes(choice)) break;
//         }

//         this.move = choice;
//       } else {
//         const choices = ['rock', 'paper', 'scissors'];
//         let randomIndex = Math.floor(Math.random() * choices.length);
//         this.move = choices[randomIndex];
//       }
//     },

//     isHuman() {
//       return this.playerType === 'human';
//     },
//   };
// }
function createPlayer() {
  return {
    move: null,
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };
  return Object.assign(playerObject, humanObject);
}

function createMove() {
  return {
    // possible state: type of move (paper, rock, scissors)
  };
}

//since we want to have an object that can kick it off we want something like
 


const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
  
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);
  
    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  },

  playAgain() {
      console.log('Would you like to play again? Choose (y/n):');
      let answer = readline.question();
      
      if (!answer.startsWith('y'.toLowerCase()) && !answer.startsWith('n'.toLowerCase())) {
        while (true) {
          console.log('That is not a valid selection. Please choose (y/n):')
          answer = readline.question();
          if (answer.startsWith('y'.toLowerCase()) || answer.startsWith('n'.toLowerCase())) break;
        }
      }
      return answer.startsWith('y'.toLowerCase());   
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();


