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


/*
We can have collision if our hash function generates the same hash,
there are 2 popular means of collision resolution.
seperate chaining and linear probing.

Seperate chaining
When a collision occurs, we still need to be able to store the key at the
generated index, but we can't store more than one piece of data at a particular
element.
Separate chaining is a technique where each array element of a
hash table stores another data structure, such as another array,
which is then used to store keys. Using this technique, if two keys generate
the same hash value, each key can be stored in a different
position of the secondary array.

Linear probing

A second technique for handling collisions is called linear probing.
Linear probing is an example of a more general hashing technique called
open-addressing hashing. With linear probing, when there is a collision,
the program simply looks to see if the next element of the hash table is empty.
If so, the key is placed in that element. If the element is not empty,
the program continues to search for an empty hash-table element until one
is found. This technique makes use of the fact that any hash table is going to
have many empty elements and it makes sense to use the space to store keys.
*/
