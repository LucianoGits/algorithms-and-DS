function count(target, arr) {
  let sum = 0; // 1 unit of time
  for (let i = 0; i < arr.length; i++) {
    //i will be ran 1 time, condition is n+1 and iteration in loop is ran n times
    if (arr[i] === target) sum += 1; // ran n times
  }
  return sum === 0 ? "Target not found" : `${target} occurs ${sum} time(s)`;
}

console.log(count("5", [1, 2, 3, "5", 4, 5]));
