// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let myArray = arr;
  //loop through
  for (let x = 0; x < myArray.length; x++) {
    for (let y = 0; y < (myArray.length - x - 1); y++) {
      if (myArray[y] > myArray[j+1]) {
        let lesser  = myArray[j+1];
        myArray[j + 1] = myArray[j];
        arr[j] = lesser;
        
      }
    }    
  }
  return myArray;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) { 
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
}

function mergeSort(arr) {
  //check if it has one element
  if (arr.length === 1) {
    return arr;
  }

  //center
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    }else{
      results.push(right.shift());
    }    
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
