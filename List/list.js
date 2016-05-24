//List ADT and its implementation

//List Abstract Data Type
/*
listSize  (property) : Number of elements in the list
pos  (property)  : Current position in the list
length  (property)  : Returns the number of elements in the list

Clear  (function)  : Clears all elements from the list
toString  (function) : Returns the String representation of the list
getElement  (function)  : Returns Element in the current position
insert  (function)  : Inserts new elements after existing elements
append  (function)  : Adds new elements to the end of the list
remove  (function)  : Removes the element from the list
front  (function)  : Sets the current position to the first element of the list
end  (function)  : Sets the current position to the last element of the list
prev  (function) : Moves the current position back one element
next (function) : Moved the current position to the next element
currPos  (function) : Returns the current position of the list
moveTo  (function) : Moves the current position to the specified location

*/

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; //initialize an empty array to store list items
  this.clear = clear;
  this.find = find;
  this.toString  = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next  = next;
  this.length = length;
  this.currentPos = currentPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;

  //Append: adding an element to the list
  function append(element) {
    this.dataStore[this.listSize++] = element;
  }

  // find an element
  function find(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  }
  //Remove element
  function remove(element) {
    var index = this.find(element);
    if(index > -1) {
      this.dataStore.splice(index, 1);
      --this.listSize;
      return true; // element was removed
    }
    return false; // element not found
  }

  // length of List
  function length() {
    return this.listSize;
  }

  //toString methods
  function toString() {
    return this.dataStore;
  }

  //Insert element
  function insert(element, after) {
    var index = this.find(after);
    if(index > -1) {
      this.dataStore.splice(index + 1, 0, element);
      ++this.listSize;
      return true //element was inserted successfully
    }
    return false; //element was inserted since after was not found
  }

  //Remove all elements from the list
  function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  //Determine if the given value is in the listSize
  function contains(element) {
    for (var i = 0; i < this.dataStore.length; i++ ) {
      if(this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }

  //Traversing a List
  function front() {
    this.pos = 0;
  }

  function end() {
    this.pos = this.listSize - 1;
  }

  function prev() {
    if(this.pos > 0) {
      --this.pos;
    }
  }

  function next() {
    if(this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }

  function currPos() {
    return this.pos;
  }

  function moveToPos(position) {
    this.pos = position;
  }

  function getElement() {
    return this.dataStore[this.pos];
  }
}
