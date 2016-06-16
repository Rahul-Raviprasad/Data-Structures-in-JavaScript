//Set implementation
function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
  this.show = show;

  function add(data) {
    if(this.dataStore.indexOf(data) < 0) { //since the set only contain unique elements
      this.dataStore.push(data);
      return true
    } else {
      return false;
    }
  }

  //again check first if the data is present in the set then remove
  function remove() {
    if(this.dataStore.indexOf(data) > -1) {
      this.dataStore.splice(this.dataStore.indexOf(data), 1);
      return true;
    } else {
      return false;
    }
  }

  function show() {
    return this.dataStore;
  }

  function contains(data) {
    return this.dataStore.indexOf(data) > -1;
  }

  function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++) {
      tempSet.add(this.dataStore[i]);
    }
    for(var j = 0; j < set.dataStore.length; j++) {
      if(!tempSet.contains(set.dataStore[j])) {
        tempSet.add(set.dataStore[j]);
      }
    }
    return tempSet;
  }

  function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i]);
      }
    }
    return tempSet;
  }

  //function to check whether the given set is a subset
  function subset(set) {
    if (this.size() > set.size()) {
      return false;
    } else {
      for each (var member in this.dataStore) {
        if (!set.contains(member)) { return false;}
      }
    }
    return true;
  }

  function size() {
    return this.dataStore.length;
  }

  function difference(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (!set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i]);
      }
    }
    return tempSet;
  }
}
