// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //Solution 1 - split by the words to the words
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

module.exports = capitalize;

// //My solution - trying to use the every function
// let word = str.split('');

// //first letter
// word[0] = word [0].toUpperCase();

// for (let x = 0; x < word.length; x++) {
//   if(word[x] === " "){
//     word[x + 1] = word [x + 1].toUpperCase();
//   }
// }

// return word.join('');
