//Hashing

/*
Hashing is a common technique for storing data in such a way
that the data can be inserted and retrieved very quickly.

Although Hash tables provides fast insertion, deletion and retrival,
they perform poorly for operations that involves searching for example
find min or max


The hashtable data structure is designed around an array and it also
has key value. To store a data the key is mapped into a number in the range of
0 through the hash table size, using a hash function.
Even with a efficient hash function, it is possible for two keys to hash
(the result of the hash function) to the same value. This is called a collision
we need a strategy for handling collision.

The last thing we have to determine when creating a hash function is how large
an array to create for the hash table. One constraint usually placed on the array
size is that it should be a prime number.

Choosing a hash function

The choice of the hash function depends on the data type of the key.
If your key is an integer, then the simplest hash function is to return the
key modulo the size of the array. There are circumstances when this function
is not recommended, such as when the keys all end in 0 and the array size is 10.
This is one reason the array size shouldbe a prime number such as 137.

Modular Hashing: if the keys are random integers, then the hash funciton should
more evenly distribute the keys.

In many applications the keys strings, choosing a hash function to work with string
key can be challenging.


*/

//Example using the hashtable defined in hashtable.js
var someNames = [
  "Rahul",
  "Anoop",
  "Prakiti",
  "Swathi",
  "Vamshi",
  "Deepak",
  "Rachit",
  "Shruthi",
  "Subrat"
];
var hTable = new HashTable(); //requires the hashtable class
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
hTable.showDistro();
