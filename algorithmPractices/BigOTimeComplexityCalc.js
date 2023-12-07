//Algorithm to add every single natural number that comes below the n number including n.

const summation = (n) => {
  let sum = 0; // runs 1
  for (let i = 1; i <= n; i++) {
    sum += i; // runs n times
  }
  return sum; // runs 1
};

/**   calculatinng time complexity of this algorithm
 * time complexity of this algorithm is n+2
 */

//O(1) time complexity  of the same algorithm
const summationAlg2 = (n) => (n * (n + 1)) / 2; //runs once

//find max in an array algorithm
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([1, 6, 3, 4, 5]));
