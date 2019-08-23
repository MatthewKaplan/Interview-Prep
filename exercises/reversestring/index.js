/*   
--- Directions
Given a string, return a new string with the reversed
order of characters

--- Examples
  reverse('apple') === 'leppa'
  reverse('hello') === 'olleh'
  reverse('Greetings!') === '!sgniteerG'
*/

/************* Solution 1 ******************/

/* 
    1. Take the given string and use the .split('') method to return an array of all characters in the string.
        'apple'.split('')  ===  ['a','p','p','l','e']
    2. Now take that array and use the .reverse() method to return a reversed array.
         ['a','p','p','l','e'].reverse()  ===  ['e','l','p','p','a']
    3. Finally use the .join('') method on that array to turn it back into a string that has been reversed.
        ['e','l','p','p','a'].join('')  ===  'elppa'
*/

function reverseSolution1(str) {
  return str.split('')
            .reverse()
            .join('');
}

console.log(reverseSolution1('apple'))
console.log(reverseSolution1('hello'))
console.log(reverseSolution1('Greetings!'))

/************* Solution 2 ******************/

/* 
    1. Create a variable and assign it to an empty string.
        
    2. Use a 'for of' loop to iterate through all the characters in the str being passed though to the function.
         
    3. Finally every time to loop runs it adds that first character to the empty string making it return the reverse string.
        
*/

function reverseSolution2(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

console.log(reverseSolution2('apple'))
console.log(reverseSolution2('hello'))
console.log(reverseSolution2('Greetings!'))

/************* Solution 3 ******************/

/* 
    1. Take the given string and use the .split('') method to return an array of all characters in the string.
        'apple'.split('')  ===  ['a','p','p','l','e']
        
    2. Now use the .reduce() on the split array and set the accum to and empty string.
         ['a','p','p','l','e'].reduce((accum, count) => {}, '')
         
    3. Finally in the body of the reduce method return the count + accum to receive the reversed string.      
*/

function reverseSolution3(str) {
  return str.split('').reduce((accum, count) => {
    return count + accum;
  }, '')
}

console.log(reverseSolution3('apple'))
console.log(reverseSolution3('hello'))
console.log(reverseSolution3('Greetings!'))

// module.exports = reverseSolution1;
// module.exports = reverseSolution2;
module.exports = reverseSolution3;