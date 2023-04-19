// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//Solution 2 - using recursion
function pyramid(n, row = 0, stair = '') {
  //find the center
  const midpoint = Math.floor((n * 2 - 1) / 2) ;

  //base case
  if (n === row) {
    return;    
  }

  //checking the string against the column length
  if ((2 * n -1) === stair.length) {
    console.log(stair);
    pyramid(n, row + 1)
    return;
  }

  let add;

  //checking if we print the hash or not
  if ((midpoint - row) <= stair.length && (midpoint + row) >= stair.length) {
    add = '#';    
  }else{
    add = ' ';
  }

  pyramid(n, row, stair + add);
}

module.exports = pyramid;


// //Solution 1
//   //find the center point
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';
    
//     //2 * n - 1 will help with finding out the number of columns
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       }else{
//         level += ' ';
//       }      
//     }

//     console.log(level);
//   }