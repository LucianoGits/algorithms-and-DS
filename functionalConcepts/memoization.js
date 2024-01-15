// caching first
const prevValues = {};

function square(n) {
  if (prevValues[n] != null) return prevValues[n];

  let result = n * n;

  prevValues[n] = result;

  return result;
}

console.log(square(10));
console.log(square(10));
console.log(square(8));
console.log(prevValues);
