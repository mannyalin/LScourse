// Initialize the Deck
// Deal cards to Player and Dealer
// Player turn: Hit or Stay
//  -If player bust, dealer wins
// Dealer turn: hit until >= 17
//  -If dealer bust, player wins
// Compare hands and declare winner.
const TARGETTOTAL = 21;
let readline = require('readline-sync');
let totalPerSuit = 13;
let deck = [];
let playerHand;
let computerHand;
let again;
// eslint-disable-next-line max-lines-per-function
function prompt(message) {
  console.log(`==> ${message}`);
}
function initializeDeck() {
  let deck = [];
  for (let cardNumber = 1; cardNumber <= totalPerSuit; cardNumber += 1) {
    // eslint-disable-next-line semi
    let suit = ['H', 'D', 'S', 'C']
    for (let idx = 0; idx < suit.length; idx += 1) {
      deck.push([String(cardNumber), suit[idx]]);
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

function randomCard(amountInDeck) {
  return Math.floor(Math.random() * amountInDeck);
}
function deal(deck) {
  playerHand = deck.splice(deck[randomCard(deck.length)], 2);
  computerHand = deck.splice(deck[randomCard(deck.length)], 2);
  console.log(playerHand);
  console.log(computerHand[0]);
}

function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
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

function busted(playerOrCompCards) {
  return total(playerOrCompCards) > TARGETTOTAL;
}

function determineWinner() {
  if (!busted(playerHand) && busted(computerHand)) {
    prompt('Player Won!');
  } else if (busted(playerHand) && !busted(computerHand)) {
    prompt('Computer Won!');
  } else if (total(playerHand) > total(computerHand)) {
    prompt('Player Won!');
  } else if (total(computerHand) > total(playerHand)) {
    prompt('Computer Won');
  } else if (total(playerHand) === total(computerHand)) {
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
while (true) {
  deck = initializeDeck();
  shuffle(deck);
  deal(deck);
  while (true) {
    if (total(playerHand) === 21) {
      prompt('Congratulations Player, you got 21');
    }
    if (total(playerHand) === 21) break;
    prompt('hit or stay?');
    let answer = readline.question();
    if (answer === 'hit') {
      playerHand.push(deck.splice(deck[randomCard(deck.length)], 1).flat());
    }
    console.log(playerHand);
    if (answer === 'stay' || busted(playerHand)) break;
  }
  while (!busted(playerHand) && total(computerHand) < 17) {
    computerHand.push(deck.splice(deck[randomCard(deck.length)], 1).flat());
  }
  console.log(computerHand);
  determineWinner();
  playAgain();
  if (again === 'n') break;
}

prompt(`Thank you for playing Twenty one!`);

// let gameDeck = initialize(DECK)
// const PlayerHand = [DECK[Math.floor(Math.random() * 13)], DECK[Math.floor(Math.random() * 13)]];
// const ComputerHand = [DECK[Math.floor(Math.random() * 13)], DECK[Math.floor(Math.random() * 13)]];
// console.log(PlayerHand);
// console.log(ComputerHand);