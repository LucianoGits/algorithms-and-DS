// A tree is an abstract model of a hierarchical structure. The most common example of a tree in real life would be a family tree, or a company organizational. a tree is a non sequential data structure which is very useful for storing information that needs to be found easily.

// The top of a tree is called the root and it does not have a parent (level 0).
// Each element of a tree is called a node.
// there are internal and external node, an internal node is a node with atleast one child. a node that does not have children is called an external node

// a node can also have descendents and ancestors. ancestors of a node are parent, grandparent, great-grandparent and so on.
// a subtree consists of a node and its descendants

// Binary Tree - a node in a binary tree has at most two children: one left child and one right child.
// Binary search tree is a binary tree, but it only allows you to store nodes with lesser values on the left side and nodes with greater values on the right side.
// edges - pointers that represent the connection between the nodes
//Traversing (or walking) a tree is the process of visiting all nodes of a tree and performing an operation at each node.

//Traversing

// An "in-order traversal" visits all the nodes of a BST in ascending order, meaning it visits the nodes from the smallest to largest.
// A "pre-order traversal" visits the node prior to its descendants. An application of pre-order traversal could be to print a structured document.
// A post-order traversal visits the node after it visits its descendants. An application of post-order could be computing the space used by a file in a directory and
// its subdirectories.

// insert(key): This inserts a new key in the tree
// search(key): This searches for the key in the tree and returns true if it
// exists and returns false if the node does not exist
// inOrderTraverse: This visits all nodes of the tree using in-order traverse
// preOrderTraverse: This visits all nodes of the tree using pre-order traverse
// postOrderTraverse: This visits all nodes of the tree using post-order traverse
// min: This returns the minimum value/key in the tree
// max: This returns the maximum value/key in the tree
// remove(key): This removes the key from the tree

console.log("--------------mini recursion revision-------------------");
const loopMe = function (maxCount, counter = 0) {
  if (counter <= maxCount) {
    console.log(`count ${counter}`);
    loopMe(maxCount, counter + 1);
  }
};
loopMe(10);

const loopMeWithCallback = function (maxCount, callbackFn, counter = 0) {
  if (counter < maxCount) {
    callbackFn(counter);
    loopMeWithCallback(maxCount, callbackFn, counter + 1);
  }
};
let fruits = ["apple", "orange", "banana"];
loopMeWithCallback(fruits.length, (count) => {
  console.log(fruits[count]);
});

const calcPower = function (n, pow) {
  if (pow === 0) return 1;
  if (pow < 0) return parseFloat((1 / n) * calcPower(n, pow + 1)).toFixed(5);

  return n * calcPower(n, pow - 1);
};

console.log(calcPower(5, -5));

console.log(
  "-------------------------------Binary Search Tree--------------------------"
);

class TreeNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert helper function
  _insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  //insert method
  insert(key) {
    const newNode = new TreeNode(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  //helper search function
  _searchNode(node, value) {
    if (node === null) return false;

    if (node.key === value) {
      return true;
    } else if (value < node.key) {
      return this._searchNode(node.left, value);
    } else {
      return this._searchNode(node.right, value);
    }
  }
  search(key) {
    return this._searchNode(this.root, key);
  }

  //inOrderTraverse helper function
  _inOrderTraverseNodes(node, result) {
    if (node !== null) {
      this._inOrderTraverseNodes(node.left, result);
      result.push(node.key);
      this._inOrderTraverseNodes(node.right, result);
    }
  }
  inOrderTraverse() {
    const result = [];
    this._inOrderTraverseNodes(this.root, result);
    return result.join(", ");
  }

  //preOrderTraverse helper function
  _preOrderTraverseNode(node, result) {
    if (node !== null) {
      result.push(node.key);
      this._preOrderTraverseNode(node.left, result);
      this._preOrderTraverseNode(node.right, result);
    }
  }
  preOrderTraverse() {
    const result = [];
    this._preOrderTraverseNode(this.root, result);
    return result.join(", ");
  }
  //postOrderTraverse helper function
  _postOrderTraverseNodes(node, result) {
    if (node !== null) {
      this._postOrderTraverseNodes(node.left, result);
      this._postOrderTraverseNodes(node.right, result);
      result.push(node.key);
    }
  }

  postOrderTraverse() {
    const result = [];
    this._postOrderTraverseNodes(this.root, result);
    return result.join(", ");
  }

  // Helper function to find the node with the minimum value (located in the leftmost subtree)
  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  min() {
    return this._findMinNode(this.root).key;
  }

  // Helper function to find the node with the maximum value (located in the rightmost subtree)
  _findMaxNode(node) {
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }

  max() {
    return this._findMaxNode(this.root).key;
  }

  // Helper function to remove a node recursively
  _removeNode(node, key) {
    if (node === null) {
      return null; // key not found, nothing to remove
    }

    if (key === node.key) {
      // Node with the target key found
      if (node.left === null && node.right === null) {
        // Case 1: Node is a leaf (has no children)
        return null;
      } else if (node.left === null) {
        // Case 2: Node has only a right child
        return node.right;
      } else if (node.right === null) {
        // Case 3: Node has only a left child
        return node.left;
      } else {
        // Case 4: Node has both left and right children
        // Find the minimum key in the right subtree (successor)
        const successor = this._findMinNode(node.right);
        // Copy the successor's key to the current node
        node.key = successor.key;
        // Remove the successor from the right subtree
        node.right = this._removeNode(node.right, successor.key);
        return node;
      }
    } else if (key < node.key) {
      // Search in the left subtree
      node.left = this._removeNode(node.left, key);
      return node;
    } else {
      // Search in the right subtree
      node.right = this._removeNode(node.right, key);
      return node;
    }
  }

  remove(key) {
    this.root = this._removeNode(this.root, key);
  }
}

// implementation

const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(11);
binarySearchTree.insert(7);
binarySearchTree.insert(15);
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(9);
binarySearchTree.insert(8);
binarySearchTree.insert(10);
binarySearchTree.insert(13);
binarySearchTree.insert(12);
binarySearchTree.insert(14);
binarySearchTree.insert(20);
binarySearchTree.insert(18);
binarySearchTree.insert(25);
binarySearchTree.insert(6);

console.log(binarySearchTree.root);
console.log("Min Value: ", binarySearchTree.min());
console.log("Max Value: ", binarySearchTree.max());
console.log(
  "Searched value: ",
  binarySearchTree.search(25) === true ? "Value exists" : "Value not found"
);
console.log(
  "In order traverse (left -> right): ",
  binarySearchTree.inOrderTraverse()
);
console.log("pre order traverse: ", binarySearchTree.preOrderTraverse());

console.log("post order traverse: ", binarySearchTree.postOrderTraverse());
console.log("removing 18: ", binarySearchTree.remove(18));
console.log(
  "pre order traverse after removing 18: ",
  binarySearchTree.inOrderTraverse()
);
