// A queue is an ordered collection of items that follows the FIFO (which stands for First In First Out, also known as first-come first-served) principle. The addition of new elements in a queue is at the tail and the removal is from the front. The newest element added to the queue must wait at the end of the queue.

// We have lines for movies, the cafeteria, and a checkout line at a grocery store, among other examples. The first person that is in the line is the first one that will be attended.
// A very popular example in Computer Science is the printing line. Let's say we need to print five documents. We open each document and click on the print button. Each document will be sent to the print line. The first document that we asked to be printed is going to be printed first and so on, until all documents are printed.
// The Queue and Stack class are very similar. The only difference is the dequeue and front methods because of the difference between the FIFO and LIFO principles.

const print = console.log;

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(...elements) {
    return elements.forEach((item) => this.items.push(item));
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    return print(this.items);
  }
}
print(`<--------------------------Queues--------------------------------->`);
const queue = new Queue();

queue.enqueue("Naomi", "Luciano", "Janice");

queue.print();
print("front method: " + queue.front());
print("empty method: " + queue.isEmpty());
print("dequeue method: removed - " + queue.dequeue());
print("size method: " + queue.size());
queue.print();

print(
  `
  -----------------------------Hot Potatoe Queues implementation/Circular Queue--------------------------------------
  `
);

function hotPotato(nameList, num) {
  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]); // enqueu every name to the queu
  }

  var eliminated = "";
  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()); // remove every item depending on the number given as the argument. we remove from beggining of queue and add to end of queue as if we are passing the potatoe
    }
    eliminated = queue.dequeue(); //once we reach the number given, person with the hot potatoe is eliminated
    console.log(eliminated + " was eliminated from the Hot Potato game.");
  }
  return queue.dequeue(); // last person on queue
}
var names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
var winner = hotPotato(names, 5);

print(`
Winner is: ${winner}`);

//priority queues
print(
  `
  -----------------------------Priority Queues--------------------------------------`
);
// /One modified version is the priority queue. Elements are added and removed based on a priority.

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    //class to add element and priority to queue
    class QueueElement {
      constructor(element, priority) {
        this.element = element;
        this.priority = priority;
      }
    }

    const queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      this.items.push(queueElement); //if empty then we just use the regular enqueue
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement); //if the priority of element we are trying to add is greater than the item in queue then we replace it one position before
          added = true;
          break; //stop looping once element is added
        }
      }
      if (!added) {
        this.items.push(queueElement); // if the element we are trying to add has less priority than all elements in queue than we just add it to the end of queue
      }
    }
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    const elements = this.items.map((item) => item.element); //displaying name instead of just passing the array directly
    print(`Priority list: ${elements}`);
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Luciano", 2);
priorityQueue.enqueue("Janice", 0);
priorityQueue.enqueue("Naomi", 1);
priorityQueue.print();
