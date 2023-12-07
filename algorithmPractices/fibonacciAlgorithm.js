const algorithm = (arr, n) => {
  let i = 0;
  let j = 0;

  while (i < n) {
    while (j < n) {
      console.log(arr[i], arr[j]);
      j++;
    }
    i++;
    j = 0;
    console.log("\n");
  }
};

const fibonacciAlgorithm = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }

  return fibonacciAlgorithm(n - 1) + fibonacciAlgorithm(n - 2);
};

console.log(fibonacciAlgorithm(13));
