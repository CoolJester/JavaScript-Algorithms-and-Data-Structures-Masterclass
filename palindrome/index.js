// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //Alternate Solution
  return str.split('').every((char, i) => {
    return char === str[str.length - 1 - i];
  });
}

module.exports = palindrome;

  // //My Solution
  // let reversed = str.split('').reverse().join('');

  // //Check if matches the original
  // if (str == reversed) {
  //   //They match
  //   return true;
  // }else{
  //   return false;
  // }

  // // Solution 1
  // let reversed = str.split('').reverse().join('');

  // return str === reversed;