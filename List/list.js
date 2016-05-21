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
}
