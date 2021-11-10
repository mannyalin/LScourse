// Initialize the Deck
// Deal cards to Player and Dealer
// Player turn: Hit or Stay
//  -If player bust, dealer wins
// Dealer turn: hit until >= 17
//  -If dealer bust, player wins
// Compare hands and declare winner.
let totalPerSuit = 13;
let deck = [];
for (let cardNumber = 1; cardNumber <= totalPerSuit; cardNumber += 1) {
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
console.log(deck);


// let gameDeck = initialize(DECK)
// const PlayerHand = [DECK[Math.floor(Math.random() * 13)], DECK[Math.floor(Math.random() * 13)]];
// const ComputerHand = [DECK[Math.floor(Math.random() * 13)], DECK[Math.floor(Math.random() * 13)]];
// console.log(PlayerHand);
// console.log(ComputerHand);