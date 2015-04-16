describe("shuffleDeck", function() {
  it("takes the deck in order and returns a shuffled deck", function() {
    expect(shuffleDeck(deck)).to.notEqual(deck);
  });
});
