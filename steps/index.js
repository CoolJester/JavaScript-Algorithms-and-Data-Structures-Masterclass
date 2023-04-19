// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//Solution 2 - using recursion
function steps(n, row = 0, stair = '') {
  //base case
  if (n === row) {
    return;    
  }

  //checking the string
  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1)
    return;
  }

  if (stair.length <= row) {
    stair += '#';    
  }else{
    stair += ' ';
  }

  steps(n, row, stair);
}

module.exports = steps;

// //Solution 1
// for (let x = 0; x < n; x++) {
//   let stair = "";
//   for (let y = 0; y < n; y++) {
//     if (y <= x) {
//       stair += '#';
//     }else{
//       stair += ' ';
//     }
//   }
//   console.log(stair);
// }