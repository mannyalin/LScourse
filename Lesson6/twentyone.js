let readline = require('readline-sync');
const TARGETTOTAL = 21;
const EACHSUITAMOUNT = 13;
const MINVALUE = 17;
const SUIT = ['H', 'D', 'S', 'C'];

let deck = [];
let playerHand;
let computerHand;
let again;

deck = initializeDeck();
shuffle(deck);
deal(deck);

function prompt(message) {
  console.log(`==> ${message}`);
}
// eslint-disable-next-line max-lines-per-function
function initializeDeck() {
  for (let cardNumber = 1; cardNumber <= EACHSUITAMOUNT; cardNumber += 1) {
    for (let idx = 0; idx < SUIT.length; idx += 1) {
      deck.push([String(cardNumber), SUIT[idx]]);
    }
  }
  deck.forEach(card => {
    if (card[0] === '11') {
      card[0] = 'J';
    }
    if (card[0] === '12') {
      card[0] = 'Q';
    }
    if (card[0] === '13') {
      card[0] = 'K';
    }
    if (card[0] === '1') {
      card[0] = 'A';
    }
  });
  return deck;
}

function shuffle(arr) {
  for (let index = arr.length - 1; index > 0; index -= 1) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [arr[index], arr[otherIndex]] = [arr[otherIndex], arr[index]];
  }
}

function randomIndex(maxRange = deck.length) {
  return Math.floor(Math.random() * maxRange);
}


function total(cards) {
  let values = cards.map(card => card[0]);
  let sum = 0;
  
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });
  // correct for Aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });
  return sum;
}
function deal(deck) {
  playerHand = deck.splice(randomIndex(), 2);
  computerHand = deck.splice(randomIndex(), 2);
  // playerHand.push(deck.splice(deck[randomIndex()], 1).flat());
  // computerHand.push(deck.splice(deck[randomIndex()], 1).flat());
  console.log(`You have ${playerHand.join(' and ')} for a total of ${total(playerHand)}`);
  console.log(`Computer shows ${computerHand[0]}`);
}

function busted(playerOrCompCards) {
  return total(playerOrCompCards) > TARGETTOTAL;
}


let playerTotal = total(playerHand);
let computerTotal = total(computerHand);

function determineWinner() {
  if (!busted(playerHand) && busted(computerHand)) {
    prompt('Player Won!');
  } else if (busted(playerHand) && !busted(computerHand)) {
    prompt('Computer Won!');
  } else if (playerTotal > computerTotal) {
    prompt('Player Won!');
  } else if (computerTotal > playerTotal) {
    prompt('Computer Won');
  } else if (playerTotal === computerTotal) {
    prompt('It is a tie!');
  }
}
function playAgain() {
  prompt('Would you like to play again? (y/n)');
  again = readline.question().toLowerCase().trim();
  while (!(again === 'y' || again === 'n')) {
    prompt('Sorry that is not a valid choice. Select only y or n');
    again = readline.question().toLowerCase().trim();
  }
}

function dealOneCard(playerOrComputer) {
  playerOrComputer.push(deck.splice(randomIndex(), 1).flat());
}


while (true) {
  while (true) {
    if (total(playerHand) === TARGETTOTAL) {
      prompt(`Congratulations Player, you got ${TARGETTOTAL}`);
      break;
    }
    prompt('hit or stay?');
    let answer = readline.question();
    if (answer === 'stay' || busted(playerHand)) break;
    if (answer === 'hit') {
      dealOneCard(playerHand);
    }
    console.log(playerHand);
    if (busted(playerHand)) break;
  }
  playerTotal = total(playerHand);
  if (busted(playerHand)) {
    prompt(`Sorry you busted with a total of ${playerTotal}, Computer Wins!`);
    playAgain();
    if (again === 'n') break;
  }

  while (total(computerHand) < MINVALUE) {
    dealOneCard(computerHand);
  }
  if (busted(playerHand)) {
    computerTotal = total(computerTotal);
    prompt(`Computer busted with a total of ${computerTotal}, Player Wins!`);
    playAgain();
    if (again === 'n') break;
  }
  console.log(computerHand);
  determineWinner();
  playAgain();
  if (again === 'n') break;
}

prompt(`Thank you for playing Twenty one!`);

