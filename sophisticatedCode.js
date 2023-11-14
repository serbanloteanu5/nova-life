/*
Filename: sophisticatedCode.js

This code is an implementation of the merge sort algorithm. Merge sort is a complex and efficient sorting algorithm that works by dividing the input array into smaller groups, recursively sorting them, and then merging the sorted groups back together. While merge sort is not the most straightforward or intuitive sorting algorithm, it is highly efficient and demonstrates sophisticated programming techniques like recursion and divide-and-conquer.

Please note that this code assumes the input array is an array of numbers. It also includes auxiliary functions for generating random arrays and displaying the sorted array.

*/

// Generates a random array of given size filled with random numbers between min and max (both inclusive)
function generateRandomArray(size, min, max) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return array;
}

// Merges two sorted arrays into a single sorted array
function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

// Implement the recursive merge sort algorithm
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// Generate a random array of 10 numbers between 1 and 100
const array = generateRandomArray(10, 1, 100);

console.log("Unsorted Array:");
console.log(array);

const sortedArray = mergeSort(array);

console.log("Sorted Array:");
console.log(sortedArray);

// Output:
// Unsorted Array:
// [14, 52, 80, 75, 4, 7, 63, 17, 88, 29]
// Sorted Array:
// [4, 7, 14, 17, 29, 52, 63, 75, 80, 88]