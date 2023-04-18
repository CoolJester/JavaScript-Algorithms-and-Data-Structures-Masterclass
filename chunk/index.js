// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

  //Array to store the sub arrays
  const chucked = [];
  let index = 0;

  //Slice to cut the array into different pieces
  while (index < array.length) {
    //Slice from the array index Till (index + size) *NOTE* the second parameter is not selected when slicing
    chucked.push(array.slice(index, index + size));
    //Incrementing the index for the next chunk piece
    index += size;
  }

  return chucked;

}

module.exports = chunk;

  // //My Solution (wrong)
  // //finding out how many chunks we need
  // var chunkCount = parseInt(Math.ceil(array.length / size));

  // //Array where the data is stored
  // let arr = [chunkCount][size];

  // //Counter variable
  // let count = 0;

  // //filling the values into the array
  // for (let x = 0; x < chunkCount; x++) {
  //   for (let y = 0; y < size; y++) {
  //     arr[x][y] = array[count];

  //     count++;
  //   }    
  // }

  // return arr;

  // //Solution 1
  // const chucked = [];

  // for (const element of array) {
  //   const last =  chucked[chucked.length - 1];

  //   if (!last || last.length === size) {
  //     chucked.push([element]);
  //   }else{
  //     last.push(element);
  //   }
  // }

  // return chucked;