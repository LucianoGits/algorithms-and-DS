//A set is a collection of items that are unordered and consists of unique elements (meaning they cannot be repeated). This data structure uses the same math concept as of finite sets, but applied to a Computer Science data structure.

//In Mathematics, a set is a collection of distinct objects.
//We can perform the following operations on sets:
// • Union: Given two sets, this returns a new set with the elements from both given sets
// • Intersection: Given two sets, this returns a new set with the elements that exist in   both sets
// • Difference: Given two sets, this returns a new set with all elements that exist in the first set and do not exist in the second set
// • Subset: This confirms whether a given set is a subset of another set

class MySet {
  constructor() {
    this.items = {};
  }

  //add item to set
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  //removes item from set
  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  //checks if item is in set (boolean) ||All JavaScript objects have the hasOwnProperty method. This method returns a Boolean indicating whether the object has the specified property or not.
  has(value) {
    return this.items.hasOwnProperty(value);
  }

  //removes all itms from set
  clear() {
    return (this.items = {});
  }

  //returns number of elements in set
  size() {
    return Object.keys(this.items).length;
  }

  //returns all values in set
  values() {
    return Object.values(this.items);
  }

  //union
  union(otherSet) {
    let unionSet = new MySet();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    //other set
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet.values();
  }

  //intersetion
  intersection(otherSet) {
    let intersectionSet = new MySet();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet.values();
  }

  //difference
  difference(otherSet) {
    let differenceSet = new MySet();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }

    return differenceSet.values();
  }

  //subset
  subset(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  }
}

const mySet = new MySet();
mySet.add("Luciano");
mySet.add("Janice");
mySet.add(4);

console.log(`removed: ${mySet.remove("Janice")}`);
console.log(`Has method: ${mySet.has("Luciano")}`);

console.log(mySet.values());
console.log(mySet.size());

console.log(`-----------------------Exercises---------------------`);

//exercise 1
const findCommonElements = (arr1, arr2) => {
  const setA = new MySet();
  const setB = new MySet();

  arr1.forEach((element) => setA.add(element));
  arr2.forEach((element) => setB.add(element));

  return setA.intersection(setB);
};

//exercise 2
const findDifference = (arr1, arr2) => {
  const setA = new MySet();
  const setB = new MySet();

  arr1.forEach((element) => setA.add(element));
  arr2.forEach((element) => setB.add(element));

  return setA.difference(setB);
};

//exports
module.exports = {
  findCommonElements,
  findDifference,
};
