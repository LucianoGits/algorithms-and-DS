//patterns
function drawPyramid(height = 12) {
  for (let i = 1; i <= height; i++) {
    // Add spaces before the first star
    let row = "";
    for (let j = 0; j < height - i; j++) {
      row += " ";
    }
    // Add stars
    for (let k = 0; k < 2 * i - 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}

drawPyramid();

//diagnol sum
function diagonalSum(arr) {
  let sumA = 0;
  let sumB = 0;

  for (let i = 0; i < arr.length; i++) {
    sumA += arr[i][i]; // Elements along the main diagonal
    sumB += arr[i][arr.length - 1 - i]; // Elements along the secondary diagonal
  }

  return sumA + sumB;
}

// Example usage:
const array = [
  [8, 7, 8],
  [2, 0, 6],
  [7, 3, 4],
];

const result = diagonalSum(array);
console.log(result); // Output: 26
