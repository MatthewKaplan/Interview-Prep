const vowelize = require('./index');

// test the function "vowelize" (vowels are “a”, “e”, “i”, “o”, and “u”)
test('the vowelize function', () => {
  expect(vowelize(['cornhole', 'waistcoat', 'tumblr'])).toEqual(['ooe', 'aioa', 'u']);
  expect(vowelize(['bacon', 'ham', 'pork'])).toEqual(['ao', 'a', 'o']);
});

// should return nothing for words without vowels
test('the vowelize function for words without vowels', () => {
  expect(vowelize(['sky', 'gypsy', 'nymph'])).toEqual([]);
});