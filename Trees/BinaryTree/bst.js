//Binary Search Tree Implementation

//Algorithm to insert a node in BST
/*
1. Set the root node to be the current node.
2. If the data value in the inserted node is less than the data value in
   the current node, set the new current node to be the
   left child of the current node. If the data value in the inserted node
   is greater than the data value in the current node, skip to step 4.
3. If the value of the left child of the current node is null, insert the
   new node here and exit the loop. Otherwise, skip to the next iteration
   of the loop.
4. Set the current node to be the right child of the current node.
5. If the value of the right child of the current node is null, insert the
   new node here and exit the loop. Otherwise, skip to the next
   iteration of the loop.
*/

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
  this.removeNode = removeNode;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}

function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    putstr(node.show() + " ");
  }
}

/*
The function travels down the left link of each node in the BST until it
reaches the left end of the BST, which is defined as:
current.left = null;
When this point is reached, the data stored in the current node must be the minimum
value
*/
function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}

function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}
/*
This function returns the current node if the value is found in the BST
and returns null if the value is not found.
*/
function find(data) {
  var current = this.root;
  while (current.data != data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if (current == null) {
      return null;
    }
  }
  return current;
}

function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node == null) {
    return null;
  }
  if (data == node.data) {
    // node has no children
    if (node.left == null && node.right == null) {
      return null;
    }
    // node has no left child
    if (node.left == null) {
      return node.right;
    }
    // node has no right child
    if (node.right == null) {
      return node.left;
    }
    // node has two children
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}
