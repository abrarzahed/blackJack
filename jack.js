let player = {
  name: "Abrar",
  chips: 145,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let nCard = document.getElementById("new-card");
let playerEl = document.getElementById("player-el");

playerEl.textContent =
  player.name + " : $" + player.chips + " (this element is not dynamic)";

// Getting  random cards
function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

// Starting the game
function startGame() {
  isAlive = true;
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
  nCard.classList.remove("disable");
}

// Rendering the game
function renderGame() {
  sumEl.textContent = "Sum : " + sum;
  cardsEl.textContent = "Cards:";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
    nCard.classList.add("disable");
  } else {
    message = "You're out of the game!";
    isAlive = false;
    nCard.classList.add("disable");
  }
  messageEl.textContent = message;
}

// Adding the new cards
function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
