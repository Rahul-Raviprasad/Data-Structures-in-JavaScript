//LinkedLists implementations

/*
Our design will invovle creating 2 classes
Node class: to represent a Node
and a LinkedList class : for typical functions of the LinkedList
*/

function Node(element) {
  this.element = element;
  this.next = null;
}

//LinkedList Class : LList

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.findPrevious = findPrevious;

  function find(item) {
    var currNode = this.head;
    while(currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // forms a new node with the new Element and then inserts it after the item
  // this implementation doesn't have a null check if the item is not found
  function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  function display() {
    var currNode = this.head;
    while(currNode.next !== null ) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  function findPrevious(item) {
    var currNode = this.head;
    while(!(currNode.next === null) && (currNode.next.element != item)) {
      currNode = currNode.next;
    }
    return currNode;
  }

  function remove(item) {
    var prevNode = findPrevious(item);
    if(prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }
}
