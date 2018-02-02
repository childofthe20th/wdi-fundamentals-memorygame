console.log("Up and running!");

var cards = ["queen", "king", "queen", "king"];
// Created array for all four suits

var cardsInPlay = [];
// Created array for cards in play

var cardOne = cards[0];
cardsInPlay.push(cardOne);
// Defined first card and added it to cards in play array

console.log("User flipped " + cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
// Defined second card and added it to cards in play array

console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else  {
		alert("Sorry, try again.");
	}
}
// Set logic for matching two cards in play