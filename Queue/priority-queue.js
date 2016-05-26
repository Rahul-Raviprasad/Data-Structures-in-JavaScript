// Priority Queue Implementation
function PriorityQueue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty; //to check whether the Queue is empty or not

  function enqueue(elem) {
    this.dataStore.push(elem);
  }

  function dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i].code < priority) {
        priority = i;
      }
    }
    return this.dataStore.splice(priority,1);
  }

  function front() {
    return this.dataStore[0];
  }

  function back() {
    return this.dataStore[this.dataStore.length - 1];
  }

  function toString() {
    var str = '';
    for(var i = 0; i < this.dataStore.length; i++) {
      str += this.dataStore[i] + '\n';
    }
    return str;
  }

  function empty() {
    return this.dataStore.length === 0;
  }
}
