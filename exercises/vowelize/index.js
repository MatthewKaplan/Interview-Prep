/*   
--- Directions
Given an array of strings, return an array of strings
of just the vowels from the original strings in the array


--- Examples
  vowelize(['cornhole', 'waistcoat', 'tumblr'])  ===  ['ooe', 'aioa', 'u']
  vowelize(['bacon', 'ham', 'pork'])  ===  ['ao', 'a', 'o']
*/

/************* Solution ******************/

/* 
    1. Take the given array of strings and map over it and use the split method on each word.
        ['cornhole', 'waistcoat', 'tumblr'].map(str => str.split('')) 
        ===  [['c','o','r','n','h','o','l','e'],['w','a','i','s','t','c','o','a','t'],['t','u','m','b','l','r']]

    2. Filter each array by only the vowel letters and join them
        ['ooe', 'aioa', 'u']
    
    3. Finally if a word doesn't have a vowel return an empty array.

*/

function vowelize (arr){
	const vowelArrays = arr.map(str => {
		return str
			.split('')
			.filter(char => {
				return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
			})
			.join('');
	});

	const noVowels = vowelArrays.includes('');

	if (noVowels) {
		return [];
	}
	return vowelArrays;
}

console.log(vowelize([ 'cornhole', 'waistcoat', 'tumblr' ]));
console.log(vowelize([ 'bacon', 'ham', 'pork' ]));
console.log(vowelize([ 'sky', 'gypsy', 'nymph' ]));
module.exports = vowelize;
