// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  //Solution
  //The final array we will return later
  const results = [];

  //loop to move through the rows
  for (let i = 0; i < n; i++) {
    //Adding the sub array
    results.push([]);
  }

  //Counter to write numbers to the array
  let counter = 1;

  //track the columns and rows (start/end col and start/end row)
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  //making the overrall loop to make sure that everything on the inside executes
  while (startColumn <= endColumn && startRow <= endRow) {
    //for the top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }

    //Changing the start row
    startRow++;

    //loop from start row to end row
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }

    //change the end column
    endColumn--;

    //loop through the row in reverse from the end column to the start column // bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;      
    }

    //changing the end row
    endRow--;

    //The last iteration for the end row to the start row
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;      
    }

    //changing the start column
    startColumn++;

  }

  return results;
}

module.exports = matrix;
