function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;

  //This simple hash function computes a hash value by summing the ASCII
  //value of each name. A big problem with function is that there can
  //be collisions
  function simpleHash() {
    var total = 0;
    for(var i=0; i < data.length; ++i) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  function showDistro() {
    var n = 0;
    for(var i = 0; i < this.table.length; i++) {
      if(this.table[i] != undefined) {
        console.log(i + " : " + this.table[i]);
      }
    }
  }

  function put(data) {
    var pos = this.simpleHash(data);
    this.table[pos] = data;
  }
}
