const isEven = (x) => (x % 2 === 0 ? true : false);
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1];
let friendsArray = [
  { name: "Janice", age: 21 },
  { name: "Luciano", age: 22 },
];
console.log(array.every(isEven)); //checks if there is atleast one element that does not meet a condition
console.log(array.some(isEven)); //checks if there is atleast one element that meets a condition
console.log(array.filter(isEven)); // will only print even number
console.log(
  array.reduce((previousNum, currentNum, index) => previousNum + currentNum)
); //takes in previous value, current value, index. can be used to add all values in an array.

//sorting method
console.log(array.sort((a, b) => b - a)); //sort in ascending order
console.log(friendsArray.sort((a, b) => b.age - a.age));

//searching

console.log(array.indexOf(5)); //returns position of first occurence of the argument, counts backwards - position 0 is the last value in the array
console.log(array.lastIndexOf(1)); // returns position of the last occurrence of the given argument

//array to string methods

console.log(array.toString().split(",").join(" "));

console.log(array);
