function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

// O(f(nˆ2))
printPairs([0, 1, 2]);

// this function prints all possible pairs of elements in an array. It uses nested loops to iterate over the array. The outer loop iterates over each element, and the inner loop iterates over all elements again. For each pair of elements, it prints them to the console. As the array size grows, the number of pairs grows quadratically, resulting in a time complexity of O(n^2), where n is the size of the array.
