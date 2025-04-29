import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  const suits = ['heart', 'spade', 'club', 'diamond'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const suitSymbol = getSuitSymbol(randomSuit);

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = `
    <div class="card ${randomSuit}">
      <div class="top-suit">${suitSymbol}</div>
      <div class="center-value">${randomValue}</div>
      <div class="bottom-suit">${suitSymbol}</div>
    </div>
  `;
};

function getSuitSymbol(suit) {
  switch (suit) {
    case 'heart':
      return '♥';
    case 'spade':
      return '♠';
    case 'club':
      return '♣';
    case 'diamond':
      return '♦';
    default:
      return '';
  }
}