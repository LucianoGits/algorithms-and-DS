// Linked lists store a sequential collection of elements; but unlike arrays, in linked lists the elements are not placed contiguously in memory. Each element consists of a node that stores the element itself and also a reference (also known as a pointer or link) that points to the next element.
// One of the benefits of a linked list over a conventional array is that we do not need to shift elements over when adding or removing elements.
// we need to use pointers when working with a linked list, and because of it, we need to pay some extra attention when implementing a linked list. Another detail in the array is that we can directly access any element at any position; with the linked list, if we want to access an element from the middle, we need to start from the beginning (head) and iterate the list until we find the desired element.

//For the LinkedList data structure, we need a helper class called Node which represents the item that we want to add to the list. It contains an element attribute, which is the value we want to add to the list, and a next attribute, which is the pointer that contains the link to the next node item of the list.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; //reference to first Node
    this.length = 0;
  }

  //add new item to end of list
  append(element) {
    const node = new Node(element);
    let currentNode;

    if (this.head === null) {
      //setting 1st node on list
      this.head = node;
    } else {
      //if list is not empty
      currentNode = this.head;

      //while currentNode.next is not null
      //loop until we find the last item or until 'currentNode.next' becomes null
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      //get last item and assign next to node to make link
      currentNode.next = node;
    }
    this.length++; //update size
  }

  //insert item at specified position
  insert(position, element) {
    // check out of bound values
    if (position >= 0 && position <= this.length) {
      let node = new Node(element);

      let currentNode = this.head,
        index = 0,
        previousNode;

      if (position === 0) {
        // add first position
        node.next = currentNode;
        this.head = node;
      } else {
        while (index++ < position) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        node.next = currentNode;
        previousNode.next = node;
      }
      this.length++;
      return `Inserted ${element} at position ${position}`;
    } else {
      return `failed to Insert element`;
    }
  }

  // remove item at specified position
  removeAt(position) {
    //check out of bounds values
    if (position > -1 && position < this.length) {
      let currentNode = this.head,
        previousNode,
        index = 0;

      if (position === 0) {
        this.head = currentNode.next;
      } else {
        while (index++ < position) {
          previousNode = currentNode;
          currentNode = currentNode.next; //traversing through items
        }
        //link previousNode currentNode's next: skip it to remove
        previousNode.next = currentNode.next;
      }
      this.length--;
      return `Removed element: ${currentNode.value} at position ${position}`;
    } else {
      return null;
    }
  }

  //remove item by element
  remove(element) {
    let elementPosition = this.indexOf(element);
    return this.removeAt(elementPosition);
  }

  // returns position of element
  indexOf(element) {
    let currentNode = this.head,
      index = 0;
    while (currentNode) {
      if (currentNode.value === element) return index;
      index++;
      currentNode = currentNode.next;
    }

    return -1;
  }

  // checks if there are items in list
  isEmpty() {
    return `Empty: ${this.length === 0}`;
  }

  // number of items in list
  size() {
    return `Size: ${this.length}`;
  }
  getHead() {
    return this.head;
  }

  // As the list uses a Node class as an item, display object values into string values
  toString() {
    let current = this.head,
      string = [];
    while (current) {
      string.push(current.value);
      current = current.next;
    }
    return `Values: ${string.join(", ")}`;
  }
}

//
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

// console.log(linkedList.removeAt(0));
console.log(linkedList.insert(0, "Luciano"));
console.log(linkedList.insert(1, "Janice"));
console.log(linkedList.getHead());
console.log(linkedList.size());
console.log(linkedList.toString());
console.log(linkedList.indexOf("Luciano"));
console.log(linkedList.remove("Luciano"));
console.log(linkedList.getHead());

console.log(
  "---------------------Doubly linked lists---------------------------------"
);

//The difference between a doubly linked list and a normal linked list is that in the linked list we make the link from one node to the next one only. In the doubly linked list, we have a double link: one for the next element and one for the previous element, as

class NodeForDoublyLinkedLists {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new NodeForDoublyLinkedLists(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  //insert
  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      let node = new NodeForDoublyLinkedLists(element);

      let currentNode = this.head,
        previuosNode,
        index = 0;
      if (position === 0) {
        //first position
        //if there is not head
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = currentNode;
          node.prev = node;
          this.head = node;
        }
      } else if (position == this.length) {
        //last element
        currentNode = this.tail;
        currentNode.next = currentNode;
        this.tail = node;
      } else {
        while (index++ < position) {
          previuosNode.next = node;
          currentNode = currentNode.next;
        }
        node.next = currentNode;
        previuosNode = node;

        currentNode.prev = node;
        node.prev = previuosNode;
      }
      this.length++;
      return `Added ${element} at position ${position}`;
    } else {
      return `Did not insert ${element} at position ${position}`;
    }
  }

  removeAt(position) {
    //out-of-bounds values
    if (position >= 0 && position < this.length) {
      let currentNode = this.head,
        index = 0,
        previosNode;

      //remove first element
      if (position === 0) {
        this.head = currentNode.next; // set current head to the next element{1}

        //remove the only element in the list, updating tail {2}
        if (this.length === 1) {
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (position === this.length - 1) {
        //last item
        currentNode = this.tail; //{4}
        this.tail = currentNode.prev;
        this.tail.next = null;
      } else {
        while (index++ < position) {
          previosNode = currentNode; //{5}
          currentNode = currentNode.next;
        }

        //link previos node with the current node next -skip
        previosNode.next = currentNode.next; //{6}
        currentNode.next.prev = previosNode;
      }
      this.length--;
      return currentNode.value;
    } else {
      return null;
    }
  }

  indexOf(element) {
    let currentNode = this.head,
      index = 0;
    while (currentNode) {
      if (currentNode.value === element) return index;
      index++;
      currentNode = currentNode.next;
    }

    return -1;
  }

  //remove item by element
  remove(element) {
    let elementPosition = this.indexOf(element);
    return this.removeAt(elementPosition);
  }

  toString() {
    let current = this.head,
      string = [];
    while (current) {
      string.push(current.value);
      current = current.next;
    }
    return `Values: ${string.join(", ")}`;
  }

  getHead() {
    return this.head;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  //custom methods
  getHeadValue() {
    return `Head value: ${this.head.value}`;
  }
}

const doublyLinkedList = new DoublyLinkedLists();
doublyLinkedList.append("Janice");
doublyLinkedList.append("Luciano");
doublyLinkedList.insert(0, "Naomi");
doublyLinkedList.insert(0, "marcelo");
doublyLinkedList.append("Lulu");
console.log(`removed: ${doublyLinkedList.removeAt(0)}`);
console.log(doublyLinkedList.remove("Lulu"));
console.log(doublyLinkedList.getHead());
console.log(doublyLinkedList.toString());
console.log(doublyLinkedList.size());

//A circular linked list can have only one reference direction (as the linked list) or a double reference as the doubly linked list. The only difference between the circular linked list and a linked list is that the last element's next (tail.next) pointer does not make a reference to null, but to the first element (head).

//the most important advantage of a linked list over an array is that you can easily add and remove elements from a linked list without shifting over its elements

// And a doubly circular linked list has tail.next pointing to the head element and head.prev pointing to the tail element.

module.exports = LinkedList;
