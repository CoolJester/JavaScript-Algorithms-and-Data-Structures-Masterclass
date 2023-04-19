// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //Solution 2
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

module.exports = vowels;

// //My Solution 
// let counter = 0;
// //check the vowels using a loop
// for (const ele of str.toLowerCase()) {
//   //check the item
//   if(ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u'){
//     counter++;
//   }
// }

// return counter;

// //Solution 1
// let counter = 0;
// const checker = ['a', 'e', 'i', 'o', 'u'];

// for (let ele of str.toLowerCase()) {
//   //check the item
//   if(checker.includes(ele)){
//     counter++; 
//   }
// }

// return counter;