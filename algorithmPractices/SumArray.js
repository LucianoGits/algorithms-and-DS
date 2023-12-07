function sumArray(arr) {
  let sum = 0; //runs onnce
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // runs i array's length times
  }
  return sum; // runs once
}
//This is Linear Time complexity O(f(n))

console.log(sumArray([1, 3, 7, 1, 1, 1]));
