// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  //Solution
  for (let x = 1; x <= n; x++) {
    //Checking the values we got
    if (x % 3 === 0 && x %  5 === 0) {
      //check the number if its a multiple of 3 and 5
      console.log("fizzbuzz");
    }else if(x % 3 === 0){
      //Is the number a multiple of 3
      console.log("fizz");
    }else if(x % 5 === 0){
      //Is the number a multiple of 3
      console.log("buzz");
    }else{
      //When all the previous values aint multiples of 3 and 5
      console.log(x);
    }
  }

  
}

module.exports = fizzBuzz;

// //My Solution (wrong)
//   //loop
//   for (let z = 1; z <= n; z++) {
//     //skipping 1 and 2
//     if (z == 1 || z == 2) {
//       console.log(z);
//       continue;
//     }

//     //checking if its a multiple of 3
//     if(n % 3 == 0 && n % 5 == 0){
//       console.log("fizzbuzz")
//     }else if (n % 3 == 0) {
//       console.log("fizz");
//     } else if (n % 5 == 0) {
//       console.log("buzz");
//     }else{
//       console.log(z);
//     }
//   }