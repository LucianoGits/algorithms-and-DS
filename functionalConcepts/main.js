const generateDiv = (value) =>
  `<div style = "text-align: center; font-size:2rem;">${value}</div>`;

const initApp = async () => {
  const MultiplyBy10 = memoizedMultiBy10();
  const memoizedMultiplyBy10 = memoize(MultiplyBy10);

  document.writeln(
    generateDiv(
      "Implementing memoization through the 'memoizedMultiBy10' function"
    )
  );

  document.writeln(generateDiv(MultiplyBy10(10)));

  document.writeln(generateDiv(MultiplyBy10(23)));

  document.writeln(generateDiv(MultiplyBy10(4)));

  document.writeln(generateDiv(MultiplyBy10(10)));

  document.writeln(generateDiv("---------------------------------"));
  document.writeln(
    generateDiv(
      "Implementing memoization through the decorator 'memoized' function"
    )
  );
  document.writeln(generateDiv(memoizedMultiplyBy10(88)));

  document.writeln(generateDiv(memoizedMultiplyBy10(20)));

  document.writeln(generateDiv(memoizedMultiplyBy10(88)));
};

document.addEventListener("DOMContentLoaded", initApp);

//applying memoization with separate functions

const memoizedMultiBy10 = () => {
  const cache = {};
  return (num) => {
    if (num in cache) {
      console.log(cache);
      return cache[num];
    }

    const result = num * 10;

    cache[num] = result;
    return result;
  };
};

//applying memoization using decorator functions
const MultiplyBy10 = (num) => num * 10;

const add3Nums = (num1, num2, num3) => num1 + num2 + num3;

const addAsMany = (args) =>
  args.reduce((accumulator, num) => accumulator + num);

const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    if (args.toString() in cache) {
      console.log(cache);
      return cache[args.toString()];
    }

    const result = fn(...args);

    cache[args.toString()] = result;

    return result;
  };
};
