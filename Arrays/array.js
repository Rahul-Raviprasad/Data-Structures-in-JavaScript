/*
Arrays are the most commonly used data structure in JS.

//--- Most Programming languages

In most programming languages Arrays are inbuilt and they are a
linear collection of elements.
That is they occupy adjacent memory blocks(contiguos memory locations).

Which makes their lookup very fast. so they are considered good choices
for many storage purposes.

//---

But in JS Array are completely different altogether.
They are specialized type of JS Object, with the indices
being strings(not just offsets like 0,1,2,3)

When integers are used myArray[1], then this "1" is converted to string
internally, to conform to the requirement of the JS Object.

So we can see that it may not be a contiguos memory block like in other
languages so Arrays in JS may not be as efficient as other languages.

//-----

The Array is one of the recognized JS Object type and so it has both
properties and functions
*/

//Examples

//Creating Arrays

var myArray = [];

//Create Arrays and initialize with some elements

var vehicles = ["car", "bus", "bike"];
var randomNumbers = [2, 3, 5, 7, 2, 10];

//create using Array constructor

var numbers = new Array(1, 4, 5, 6);

//if only one integer is passed to new Array constructor then it
//specifies the length of the arrays
var phones = new Array(10);

//Array.prototype.length
//The length property represents an unsigned, 32-bit integer
//that is always numerically greater than the highest index in the array.
console.log("Checking the length property of array phones: " + phones.length);
//this will log 10

//Arrays can hold "any" type of Data (used <any> intentionally for typescript guys :p)
var someObj = {"yo": "yo", "blah": "blahblah"};
var myArrayOfObjects = [10, "car", false, someObj ];
console.log("Array can hold any type of data : " + JSON.stringify(myArrayOfObjects));

//Determining with absolute accuracy whether or not a JavaScript object is an array
/*    --------Taken from http://web.mit.edu/jwalden/www/isArray.html ----------

typeof null === "object" is perhaps the most common typing mistake in JavaScript,
but there are others as well.
A much less common but no less confusing problem is that of determining whether an object is an array.
Surely, say you, this is a simple problem with a simple solution, like so:

if (o instanceof Array)
{
  // Oh frabjous day!
}
Under certain circumstances, the above code is perfectly functional;
considering the history of the web, it's not surprising the issue wasn't quickly apparent.
The problem arises when one considers an aspect of
JavaScript in browsers not contemplated by ECMAScript: multiple globals.

The ECMAScript specification describes the environment and mechanisms
involved in executing a string of code. The syntax and basic semantics of language
constructs are certainly important, but without the built-in methods and objects
coding in ECMAScript wouldn't be much fun. These methods and objects are accessed through
the global object, and it is here where things go astray.
The ECMAScript 3 environment implicitly assumes the existence of a single global
(or, perhaps, of islands each of which is its own environment, with no interaction between them)
and does not in any manner address the idea of multiple globals.

Multiple globals, however, are fundamental to the browser;
each window object is the global object for the scripts its page contains or references.
What about arrays in different windows?
The shared-mutation hazard of having arrays in two coordinating windows
be instances of the same Array constructor, sharing the same Array.prototype,
is enormous when either page augments Array.prototype
(not to mention the security problems when one page is malicious!),
so Array and Array.prototype in each window must be different.
Therefore, by the semantics of instanceof, o instanceof Array works correctly
only if o is an array created by that page's original Array constructor
(or, equivalently, by use of an array literal in that page).

Are there any other methods of determining whether a value is an array
that might work around this? o.constructor === Array is one,
with the same problem as an instanceof check.
Another option relies on so-called "duck typing",
where if a value quackslooks like a duckan array then it is a duckan array.
Along the constructor-checking lines, you could check for other array methods
like push or concat, or perhaps for a length property,
but these properties could exist in the same fashion on a non-array object.
If you're willing to have false positives and negatives
(assuming unconstrained input) that might be acceptable,
but of course that won't always be the case.
One test in this style is Object.prototype.toString.call(o) === "[object Array]",
but that relies on Object.prototype.toString and Function.prototype.call
not being changed (probably a good assumption but still fragile).
It's also a bit more of an obvious hack than any of the other ideas.

Enter Array.isArray

For these reasons, ECMAScript 5 defines a method, Array.isArray,
to completely address the problem.
If the first argument provided is an array object created in any window at all,
it returns true; if no arguments were provided or
if the first argument wasn't an array object, it returns false.


*/

//The following will all log true
console.log("Following statements about Arrays are true:-");
console.log("Array.isArray([]): " + Array.isArray([]));
console.log("Array.isArray([1]): " + Array.isArray([1]));
console.log("Array.isArray(new Array()): " + Array.isArray(new Array()));


// Little known fact: Array.prototype itself is an array:
console.log("Interesting Fact: Array.isArray(Array.prototype) is an array: " + Array.isArray(Array.prototype));

// all following calls return false
console.log("Following statements about Arrays are False:-");
console.log("empty- Array.isArray(): " + Array.isArray());
console.log("Array.isArray({}): " + Array.isArray({}));
console.log("Array.isArray('Array'): " + Array.isArray('Array'));
console.log("Array.isArray({ __proto__: Array.prototype }): " + Array.isArray({ __proto__: Array.prototype }));

//Accessing data in array

//here I have an array called patterns containing strings
var patterns = ['singleton', 'Factory', 'Observer', 'Decorator'];
// We can use specific index to access a particular strings
console.log("patterns Array: " + patterns);
console.log("I want to access index 2: " + patterns[2]);
// iterating over each element in the Array -use for loop
for(var i = 0; i < patterns.length; i++) {
  console.log("pattern at index i = "+ i + ": " + patterns[i]);
}

//Shallow vs Deep copy of Arrays
/* Since we know that Arrays are internally objects in JS, and when we
copy arrays like var newArr = existingArr; , we are basically passing the reference
to the existingArr. This results in Shallow Copy, That is if newArr is modified
it affects the existingArr as well.
 */
//Example
console.log("Shallow copy of Arrays :---");
var vehicles = ["car", "bike", "ship"];
var newVehicles = [];
newVehicles = vehicles;
console.log("vehicle before changing the copied array: " + vehicles);
newVehicles[0] = "Aeroplane";
console.log("vehicle after changing copied array: " + vehicles);
console.log("newVehicles after changing : " + newVehicles);

// This can introduce bugs in programs if the intention was to do a Deep copy
//Examples
function copy(arr1, arr2) {
  for (var i = 0; i < arr1.length; ++i) {
    arr2[i] = arr1[i];
  }
}
console.log("Deep copy of Arrays :---");
var vehicles = ["car", "bike", "ship"];
var newVehicles = [];
copy(vehicles, newVehicles);
console.log("vehicle before changing the copied array: " + vehicles);
newVehicles[0] = "Aeroplane";
console.log("vehicle after changing copied array: " + vehicles);
console.log("newVehicles after changing : " + newVehicles);


//Array.prototype.indexOf()

/*
The indexOf() method returns the first index at which a given
element can be found in the array, or -1 if it is not present.

Syntax
arr.indexOf(searchElement[, fromIndex = 0])

Parameters

searchElement: Element to locate in the array.
fromIndex: The index to start the search at.
If the index is greater than or equal to the array's length, -1 is returned,
which means the array will not be searched.
If the provided index value is a negative number, it is taken as the offset
from the end of the array. Note: if the provided index is negative,
the array is still searched from front to back.
If the calculated index is less than 0, then the whole array will be searched.
Default: 0 (entire array is searched).

Description
indexOf() compares searchElement to elements of the Array using strict equality
(the same method used by the === or triple-equals operator).
*/
//Examples

var array = [2, 9, 9];
console.log("Array for indexOf example: " + array);
console.log("array.indexOf(2): " + array.indexOf(2));     // 0
console.log("array.indexOf(7): " + array.indexOf(7));     // -1
console.log("array.indexOf(9, 2): " + array.indexOf(9, 2));  // 2
console.log("array.indexOf(2, -1): " + array.indexOf(2, -1)); // -1
console.log("array.indexOf(2, -3): " + array.indexOf(2, -3)); // 0


//Array.prototype.lastIndexOf

/*The lastIndexOf() method returns the last index at which a given element
can be found in the array, or -1 if it is not present.
The array is searched backwards, starting at fromIndex.
*/

var array = [2, 5, 9, 2];
console.log("Array for lastIndexOf example: " + array);
console.log("array.lastIndexOf(2): " + array.lastIndexOf(2));     // 3


//Array methods
/*
toString
join
concat
splice
push
pop
unshift
shift
reverse
sort // good for strings but bad for numbers
The sort() function sorts data lexicographically, assuming the data elements are strings,

//iterator functions that don't return new array
forEach
every
some
reduce
reduceRight

//Iterator functions which return a new array
map
filter

2D Array and jagged array


*/

/*
A very easy and common mistake people do is to assume JS Arrays, are array like
other languages.
Also to ignore the time complexity of many of the in-built methods.
It is very easy to tell that .map , .each or .filter has complexity of
order N. But it is much harder to tell for methods such as
.indexOf ---what is the order??
It is also of order N

Now that you are aware that these functions do have a time complexity of their own,
why would you keep using them? Well for that I give you these reasons:

  #They are easier to use then having to write your own for loops.
  #They are easier to read then nested for loops.
  #And perhaps the most important reason is that these methods have been optimized
   by the JavaScript engines that run them and functions designed
   using them are usually faster.
   So despite these methods bringing time complexities of their own
   it is still best practice to use them whenever possible in order to make
   your code more readable and more optimized.
*/
