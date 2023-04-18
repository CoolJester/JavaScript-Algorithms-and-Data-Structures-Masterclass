// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //My Solution
  //control
  let match = true;

  //store the strings and a lowercase format with no spaces and puncuations
  let wordOne = stringA.replace(/[^\w]/g, "").toLowerCase();
  let wordTwo = stringB.replace(/[^\w]/g, "").toLowerCase();

  //objects
  let objOne = {};
  let objTwo = {};

  //Making the strings into objects
  for (const char of wordOne) {
    if (!objOne[char]) {
      objOne[char] = 1;
    }else{
      objOne[char]++;
    }
  }
  for (const char of wordTwo) {
    if (!objTwo[char]) {
      objTwo[char] = 1;
    }else{
      objTwo[char]++;
    }
  }

  //loop through the onjects to see the matches
  for (const key in objOne) {
    if (objOne[key] == objTwo[key]) {
      match = true;
    }else{
      match = false;
    }
  }

  for (const key in objTwo) {
    if (objTwo[key] == objOne[key]) {
      match = true;
    }else{
      match = false;
    }
    
  }

  return match;
}

module.exports = anagrams;
