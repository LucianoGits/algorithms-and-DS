function searchElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `${true}: ${arr[i]} exists in array.`;
    }
  }
  return false;
}

// O(f(n))
console.log(searchElement([1, "2", 3, 4], 2));
