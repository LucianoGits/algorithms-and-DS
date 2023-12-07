//A stack is an ordered collection of items that follows the LIFO (short for Last In First Out) principle. The addition of new items or the removal of existing items takes place at the same end. The end of the stack is known as the top and the opposite is known as the base. The newest elements are near the top, and the oldest elements are near the base.
//We have several examples of stacks in real life, for example, a pile of books, as we can see in the following image, or a stack of trays from a cafeteria or food court.
//A stack is also used by compilers in programming languages and by computer memory to store variables and method calls.

const print = console.log;
//create class to represent Stack

class Stack {
  constructor() {
    this.items = [];
  }

  //methods

  //add at top of the stack
  push(element) {
    return this.items.push(element);
  }
  //remove at base of the Stack
  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    return (this.items = []);
  }

  print() {
    print(this.items.toString());
  }
}
print(`<--------------------------Stacks--------------------------------->`);
let stack = new Stack();
stack.push(5);
stack.push(20);

stack.print();

print(stack.size());
print(stack.isEmpty());

print(`-------------------------------------------------------------------`);

// Solving problems with Stack
//To convert a decimal number to a binary representation, we can divide the number by 2 (binary is base 2 number system) until the division result is 0.
print(`
Algorith to convert decimal numbers to binary representation:
`);
function divideBy2(decNumber) {
  let remStack = new Stack(),
    rem,
    binaryString = "";

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2); //get remainder of  the division
    remStack.push(rem); //add to stack
    decNumber = Math.floor(decNumber / 2); //updating decimal number to devide by two. loop goes on until number is 0
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString(); //popping elements on the stack until it's empty and adding them to string
  }

  return binaryString;
}

function baseConverter(decNumber, base = 2) {
  let remStack = new Stack(),
    rem,
    binaryString = "",
    digits = "0123456789ABCDEF";

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base); //get remainder of  the division
    remStack.push(rem); //add to stack
    decNumber = Math.floor(decNumber / base); //updating decimal number to devide by base. loop goes on until number is 0
  }

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()]; //popping elements on the stack until it's empty and adding them to string
  }

  return binaryString;
}
print(baseConverter(11, 16));
