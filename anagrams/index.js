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
  //Solution 2
  //try to sort the strings into arrays and compare the 2
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}



module.exports = anagrams;

  // //My Solution
  // //control
  // let match = true;

  // //store the strings and a lowercase format with no spaces and puncuations
  // let wordOne = stringA.replace(/[^\w]/g, "").toLowerCase();
  // let wordTwo = stringB.replace(/[^\w]/g, "").toLowerCase();

  // //objects
  // let objOne = {};
  // let objTwo = {};

  // //Making the strings into objects
  // for (const char of wordOne) {
  //   if (!objOne[char]) {
  //     objOne[char] = 1;
  //   }else{
  //     objOne[char]++;
  //   }
  // }
  // for (const char of wordTwo) {
  //   if (!objTwo[char]) {
  //     objTwo[char] = 1;
  //   }else{
  //     objTwo[char]++;
  //   }
  // }

  // //loop through the onjects to see the matches
  // for (const key in objOne) {
  //   if (objOne[key] == objTwo[key]) {
  //     match = true;
  //   }else{
  //     match = false;
  //   }
  // }

  // for (const key in objTwo) {
  //   if (objTwo[key] == objOne[key]) {
  //     match = true;
  //   }else{
  //     match = false;
  //   }
    
  // }

  // return match;

  // //Solution 1
  // //loop to make the char map to avoid making 2 loops
  // const aCharMap = buildCharMap(stringA);
  // const bCharMap = buildCharMap(stringB);

  // //matching the number of keys to see if they have the same number of keys
  // if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
  //   return false;
  // }else{
  //   for (const key in aCharMap) {
  //     if (aCharMap[key] !== bCharMap[key]) {
  //       return false;
  //     }
  //   }
  // }

  // return true;
  ////helper function

  // function buildCharMap(str){
  //   const charMap = {};
  //   for (const char of str.replace(/[^\w]/g).toLowerCase()) {
  //     charMap[char] = charMap[char] + 1 || 1;
  //   } 
  //   console.log(charMap);

  //   return charMap;
  // }