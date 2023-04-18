// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  //Solution
  

}

module.exports = maxChar;


// //My solution (wrong)
//   //Making string
//   let myString = str;
//   let chars = {};
//   let max = 0;

//   //looping through the string and filling the object
//   for (const char of myString) {
//     if (!chars[char]) {
//       chars[char] = 1;
//     }else{
//       chars[char]++;
//     }

//     //check if the new value is greater then the existing value
//     if (chars[char] > max) {
//       max = chars[char];
//     }
//   }

//   //returning the largest value
//   for (const char of myString) {
//     if (chars[char] == max) {
//       return chars[char];
//     }
//   }