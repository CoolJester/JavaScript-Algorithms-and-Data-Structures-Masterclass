// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Using memoization to make the function better
function memoize(fn){

  //storage area
  const cache = {};

  //Telling the function we don't know how many arguments it's going to receive
  return function(...args){
    //Check to see if the function has been called with this set of arguments before
    if (cache[args]) {
      //imidiatly return that and don't do anymore work
      return cache[args];
    }

    //nvr called the slow function with the set of arguments b4
    const result = fn.apply(this, args);
    //Store the results in the cache
    cache[args] = result;
    
    return result;
  }
}

function slowFib(n) {
  //Solution 2
  if(n < 2){
    return n;
  }

  return slowFib(n - 1) + slowFib(n - 2);
}

//Calling the slow function within the memoize function then return the variable it's stored in
const fib = memoize(slowFib);

module.exports = fib;



// //My Solution
// let myFib = [0, 1];

// for (let i = 2; i <= n; i++) {
//   const a = myFib[i - 1];
//   const b = myFib[i - 2];

//   myFib[i] = (a + b);
// }

// return myFib[n];

// //Solution 1 - recursive
// if(n = 1){
//   return n;
// }

// return fib(n - 1) + fib(n - 2);