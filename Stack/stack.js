//Implementation
function Stack() {
  this.dataStore = [];
  this.top = 0; // points to the empty space in the Stack yet to be filled
  this.push = push;
  this.pop = pop;
  this.peek = peek;

  function push(element) {
    this.dataStore[this.top++] = element; //set the element at top and THEN increment top
  }

  function pop() {
    return this.dataStore[--this.top];
  }

  function peek() {
    return this.dataStore[this.top - 1];
  }

  function length() {
    return this.top;
  }

  function clear() {
    this.top = 0;
  }
}
