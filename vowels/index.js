// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //My Solution 
  let counter = 0;
  //check the vowels using a loop
  for (const ele of str.toLowerCase()) {
    //check the item
    if(ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u'){
      counter++;
    }
  }

  return counter;
}

module.exports = vowels;
