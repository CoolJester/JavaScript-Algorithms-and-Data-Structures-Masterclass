// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //Solution 1
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;


//  //My solution
//   //store the number
//   let newNum = parseInt(n.toString().split('').reverse().join(''));

//   //check the sign if it is positive or negative
//   const sign = Math.sign(n);

//   //Apply the sign
//   newNum = newNum * sign;

//   return newNum;



