const LinkedList = require("./LinkedLists");
//In a dictionary (or map), we store values as pairs as [key, value]. The same goes for hashes (they store values as pairs as [key, value]); however, the way that we implement these data structures is a little bit different.

// A dictionary is used to store [key, value] pairs, where the key is used to find a particular element. The dictionary is very similar to a set; a set stores a [key, key] collection of elements, and a dictionary stores a [key, value] collection of elements. A dictionary is also known as a map.
console.log(
  `
  ---------------------------Dictionaries------------------------
  `
);
class Dictionary {
  constructor() {
    this.items = {};
  }

  set(key, value) {
    return (this.items[key] = value);
  }

  remove(key) {
    if (this.has(key)) {
      let keyValue = this.get(key);
      delete this.items[key];

      return `deleted ${keyValue}`;
    }
    return false;
  }

  has(key) {
    // key in this.items; //alternative
    return this.items.hasOwnProperty(key);
  }

  get(key) {
    return this.has(key) ? this.items[key] : `Key(${key}) not found`;
  }

  clear() {
    return (this.items = {});
  }

  size() {
    return Object.keys(this.items).length;
  }

  keys() {
    return Object.keys(this.items);
  }

  values() {
    return Object.values(this.items);
  }

  getItems() {
    return this.items;
  }
}

const dictionary = new Dictionary();

dictionary.set(1, "Luciano");
dictionary.set(2, "Janice");
dictionary.set(3, 4);
dictionary.set(4, 5);
dictionary.set(5, "COD");

console.log("all keys in dictionary", dictionary.keys());
console.log(dictionary.remove(1));
console.log("is given key present: ", dictionary.has(1));
console.log("value for given key:", dictionary.get(5));
console.log("all items", dictionary.getItems());
console.log("all values ", dictionary.values());
console.log("length/size:", dictionary.size());

console.log(
  `
  ---------------------------Hashes------------------------
  `
);

// Hashing consists of finding a value in a data structure in the shortest time possible. You have learned from previous chapters that if we would like to get a value from it (using a get method), we need to iterate through the structure until we find it. When we use a hash function, we already know which position the value is in,
// so we can simply retrieve it. A hash function is a function that given a key, and will return an address in the table where the value is.
// The hash function we will use is the most common one, called a "lose lose" hash function, where we simply sum up the ASCII values of each character of the key length.

//helper class for hashtable
class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[${this.key} - ${this.value}]`;
  }
}

class HashTable {
  constructor() {
    this.table = [];
  }

  //lose-lose hash function
  loseLoseHash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = hash * 31 + key.charCodeAt(i); //{4}
    }
    return hash % 37;
  }
  // To work with lower numbers, we will multiply the hash number by a prime number (31)+ the Character code to prevent data collisions (line {4}). Data collision is when one address has multiple value, however, the last value added to the address will occupy the address.

  // // simple hash map put method:
  // put(key, value) {
  //   const index = this.loseLoseHash(key);
  //   if (!this.table[index]) {
  //     this.table[index] = [];
  //   }

  //   const bucket = this.table[index];
  //   const existingIndex = bucket.findIndex((item) => item.key === key);
  //   if (existingIndex !== -1) {
  //     // Key already exists in the bucket, update the value
  //     bucket[existingIndex].value = value;
  //   } else {
  //     // Key does not exist in the bucket, add a new key-value pair
  //     bucket.push({ key, value });
  //   }
  // }

  // separate chaining with LinkedLists put Method
  put(key, value) {
    const position = this.loseLoseHash(key);

    if (!this.table[position]) {
      this.table[position] = new LinkedList();
    }

    const linkedList = this.table[position];
    linkedList.append(new ValuePair(key, value));
  }
  // //remove for simple hashmap
  // remove(key) {
  //   const position = this.loseLoseHash(key);
  //   if (!this.table[position]) {
  //     return `Element not found!`;
  //   }
  //   const elementReference = this.table[position];

  //   const elementIndex = elementReference.findIndex(
  //     (element) => element.key === key
  //   );

  //   if (elementIndex !== -1) {
  //     elementReference.splice(elementIndex, 1);
  //     return `removed Element with key = ${key} `;
  //   }
  //   return `element not found`;
  // }

  //remove method for separate chaininng hashmaps
  remove(key) {
    const position = this.loseLoseHash(key);

    if (!this.table[position]) return "item not found";

    const linkedList = this.table[position];
    const currentNode = linkedList.getHead();
    let prevNode;

    while (currentNode) {
      if (currentNode.value.key === key) {
        if (!prevNode) {
          linkedList.removeAt(0);
        } else {
          prevNode = currentNode;
        }
        return console.log(`removed element with key ${key}`);
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return console.log("Item not found");
  }

  //get method for simple hash table
  // get(key) {
  //   const position = this.loseLoseHash(key);

  //   if (!this.table[position]) return "Item does not exist";

  //   const elementReference = this.table[position];
  //   const element = elementReference.find((element) => element.key === key);

  //   return element ? element.value : "Item does not exist";
  // }

  //get method for separate chaining hashed table

  get(key) {
    let position = this.loseLoseHash(key);

    if (!this.table[position]) {
      return "item does not exist!";
    }

    const linkedList = this.table[position];
    let currentNode = linkedList.getHead();
    while (currentNode) {
      if (currentNode.value.key === key) {
        return currentNode.value.value;
      }

      currentNode = currentNode.next;
    }

    return "Item does not exist";
  }

  //print all items method for simple hash table
  // print() {
  //   for (const address of this.table) {
  //     if (address) {
  //       for (const item of address) {
  //         console.log(`key: ${item.key} , value: ${item.value}`);
  //       }
  //     }
  //   }
  // }

  // print all items method for separate chainign hash table
  print() {
    for (const linkedList of this.table) {
      if (linkedList) {
        let current = linkedList.getHead();
        while (current) {
          console.log(linkedList);
          current = current.next;
        }
      }
    }
  }
}

const hashTable = new HashTable();

hashTable.put("Luciano", "Luciano@email.com");
hashTable.put("Gandalf", "gandalf@email.com");
hashTable.put("John", "johnsnow@email.com");
hashTable.put("Tyrion", "tyrion@email.com");
hashTable.put("Aaron", "aaron@email.com");
hashTable.put("Donnie", "donnie@email.com");
hashTable.put("Ana", "ana@email.com");
hashTable.put("Jonathan", "jonathan@email.com");
hashTable.put("Jamie", "jamie@email.com");
hashTable.put("Sue", "sue@email.com");
hashTable.put("Mindy", "mindy@email.com");
hashTable.put("Paul", "paul@email.com");
hashTable.put("Nathan", "nathan@email.com");
console.log("get method: ", hashTable.get("Tyrion"));
console.log("get method: ", hashTable.get("Nathan"));
hashTable.remove("Donnie");

hashTable.print();

// to avoid data collisions we can use a better hash function
function djb2HashCode(key) {
  let hash = 5381;
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i);
  }
  return hash % 1013;
}
// we initialize a hash variable with a a prime nnumber '5381'
//then iterate the 'key'parameter and multiply the hash value by 33(magical number) and sum it with the ASCII value of the character.
//finally we mod the hash value by a random prime value bigger than the size of the hashtable instance we create.
