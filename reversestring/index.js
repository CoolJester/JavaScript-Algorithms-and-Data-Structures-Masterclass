// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) { 

  debugger;
  var reversedString = "";

  for (let x = str.length - 1; x < str.length; x--) {

    if(x == -1){
      break;
    }else{
      reversedString += str[x];
    } 
  }  
  return reversedString; 

}



module.exports = reverse;

//   // MY SOLUTION
//   //Variable for the reversed string
//   var reversedString = "";

//   //loop to fill the reversedString
//   for (let x = str.length - 1; x < str.length; x--) {

//     //breaking the infinite loop
//     if(x == -1){
//       break;
//     }else{
//       reversedString += str[x];
//     } 
//   }

//   //returning the string
//   return reversedString; 

//SOLUTION 1
//convert string to array then using the reverse function then change the new array to a string again
// const arr = str.split('');
// arr.reverse();  
// return arr.join('');

//Even smaller
// return str.split('').reverse().join('');

//SOLUTION 2
// //Using a for loop and a variable
// let reversed = "";

//try to avoid using the classic for loop - use for of
// for (let iterator of str) {
//   reversed = iterator + reversed;
// }

// return reversed;

//Solution 3
// return str.split('').reduce((reversed, character) => {
//   return character + reversed;
// }, '');