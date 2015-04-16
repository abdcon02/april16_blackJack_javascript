//MAKE the CARDS and DECK
var deck = [];
var faces = { "A": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 10, "Q": 10, "K": 10};

var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
suits.forEach(function(suit_individual) {
  Object.keys(faces).forEach(function(number_face) {

    var card = {
      suit: suit_individual,
      face: number_face,
      value: faces[number_face]
    }
    deck.push(card);

  });
});

function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}

console.log("deck");
console.log(deck);
var shuffled = shuffle(deck);
console.info("shuffle");
console.log(shuffled);
