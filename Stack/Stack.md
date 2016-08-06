# Stack

A stack is a list of elements that are accessible only from one end of the list, which is called the top.
One common real world example is a stack of trays.
You place new trays on the top and pick one from the top.

The Stack is known as a Last In First Out Data Structure (LIFO).
Because of the LIFO nature any element which is not at the top of the stack,
cannot be accessed. To get the element at the top of the stack, you need to
dispose of all the elements on top of it.

## Most common operations on stacks are:
push: adding to stack
pop: removing from stack
peek: viewing the top element in the stack.

## When to use the Stack?

There are  several problems for which Stacks are perfect Data Structures like

### 1. Multiple Base conversions
A stack can be used to convert a number from one base to another Base.
Given a number n, which we want to convert from "a" to base "b",
here is the algorithm for this conversion(Note: this only works for bases 2 to 9)
  1.1 The rightmost digit of n is n%b. Push this digit onto the stack.
  1.2 Replace n with n/b
  1.3 Repeat steps 1 and 2 until n = 0 and there are no significant digits remaining.
  1.4 Build the converted number string by popping the stack until the stack is empty.

```javascript
function multipleBase(num, base) {
  var s = new Stack(); //This has dependency on the Stack we defined in stack.js
  do {
    s.push(num % base);
    num = Math.floor(num /= base);
  } while(num > 0);

  var converted = "";
  while(s.length() > 0) {
    converted += s.pop();
  }

  return converted;
}
```

### 2. Palindromes
 A palindrome is a word, sentence or number which is spelled same
 from left to right and right to left. eg. Dad, 1001

 Logic: We can use a stack to determine whether or not a given string
 is a palindrome. We take the original string and push each character
 onto a stack, moving from left to right. When the end of the string
 is reached, the stack contains the original string in reverse order,
 with the last letter at the top of the stack and the first letter at
 the bottom of the stack.

```javascript
function isPalindrome(word) {
  var s =  new Stack();
  for(var i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  var reverse = "";
  while(s.length() > 0) {
    reverse += s.pop();
  }
  if(word === reverse) {
    return true;
  }
  return false;
}
```

### 3. Demonstrating Recursion

We can use stacks to simulate recursive processes.
Few links :
http://www.htmlgoodies.com/primers/jsp/article.php/3622321
http://blog.moertel.com/posts/2013-05-11-recursive-to-iterative.html
http://stackoverflow.com/questions/159590/way-to-go-from-recursion-to-iteration
http://stackoverflow.com/questions/1549943/design-patterns-for-converting-recursive-algorithms-to-iterative-ones

```javascript
//A recursive function for factorial
function factorial(number) {
  if(number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log("factorial method using recursion of 4 should return 24: factorial(4): " + factorial(4));

// to simulate the same behavior keep pushing the number from n till one onto a
//stack, then inside a loop pop each number and multiply to the running product
//factorial using Stack
function factorialStack(number) {
  var s = new Stack();
  while(n   > 1) {
    s.push(n--);
  }
  var product = 1;
  while(s.length() > 0) {
    product *= s.pop();
  }
  return product;
}

console.log("factorial method using stack of 4 should return 24: factorialStack(4): " + factorialStack(4));
```


Few words on recursion
recursive functions very often take up far more memory than non-recursive functions. If you have a function that calls itself 20 levels deep, you are using at least 20x as much memory.

floodfill function to fill spaces with a color in an application like MS Paint


this is pseudo-code, that is quickly written, non-functional code that is meant to just give an idea of how the actual code functions


function floodFill(x, y){
	if(alreadyFilled(x, y)) return;
	fill(x, y);

	floodFill(x,   y-1);
	floodFill(x+1, y  );
	floodFill(x,   y+1);
	floodFill(x-1, y  );
}

function fill(x, y){
	// this function will actually change the color of our box
}

function alreadyFilled(x, y){
	// this functions checks to see if our square has been filled already
}


Whenever you call a function, a copy of many of the variables it needs to function is kept in memory. If you call the function recursively, another copy of all these variables is stored in memory, then another,
and so on. These copies of variables are stored in what we call a stack.(Browser's own implementation)

The first copy is on the bottom, the next on top of that, and so on. Unfortunately, there is a limit to how large this stack is allowed to grow. In most browsers, the limit on how large this stack can be is around 1,000.

This means that with our floodfill function, our grid could contain up to 1,000 squares. Other browsers have a smaller stack.
The Safari web browser, for instance, has a maximum stack size of only 100 meaning that our little 10x10 grid has already maxed out this browser. So we have a limit in the browser itself that says we can only go 1,000 levels deep with our recursion. Unfortunately for us, our floodFill algorithm will, in the worst case, go 1,000 levels deep on a grid with only 1,000 boxes. If you have anything larger than this there is a chance it will overflow the stack and just stop running. Obviously there are cases where you might want to flood fill an area larger than 1,000 pixels. What do you do in this case?
Well we change our approach. The first thing we can look at doing is changing our algorithm. There are many different flood-fill algorithms out there--this one just happens to be the simplest. It looks in every direction and then
fills each square it looks at if necessary. With a very simple change we can make this algorithm drastically more efficient in terms of how much stack space it uses. Instead of just looking left and right 1 square, we can look left and right as far as we possibly can and fill each pixel in that direction. This is called a floodfill scan-line algorithm and turns out to be one of the most efficient flood fill algorithms there is. Unfortunately, it still has its limits and if you get an area large enough to fill than it too will overflow the stack. When this happens, we are left with only one alternative: don't use recursion. Instead of letting JavaScript handle the stack for us, we can create our own using a simple JavaScript array. Since an array has no limit on how many items it can contain,
we can have an "infinitely" large stack that we control ourself.
```javascript
var Stack = [];

function floodFill(x, y){
	fillPixel(x, y);

	while(Stack.length>0){
		toFill = Stack.pop();
		fillPixel(toFill[0], toFill[1]);
	}
}

function fillPixel(x, y){
	if(!alreadyFilled(x, y)) fill(x, y);

	if(!alreadyFilled(x,   y-1)) Stack.push([x,   y-1]);
	if(!alreadyFilled(x+1, y  )) Stack.push([x+1, y  ]);
	if(!alreadyFilled(x,   y+1)) Stack.push([x,   y+1]);
	if(!alreadyFilled(x-1, y  )) Stack.push([x-1, y  ]);
}

function fill(x, y){
	// this function will actually change the color of our box
}

function alreadyFilled(x, y){
	// this functions checks to see if our square has been filled already
}
```
As you can see, the process isn't all that much more complicated, but it does take a bit more micro-management than the recursive code we wrote earlier. Instead of calling our floodFill function recursively, we create a variable, Stack, that holds a list of the squares we want to fill. Our fillPixel function then adds to this array and the floodFill function pops the last element off and fills it. When all is said and done, this has exactly the same effect as the first function that we wrote with one exception: this one doesn't have any limits as to how big our grid can be.

Note that there are very few recursive functions that will actually overflow the JavaScript stack. Actually, that's not quite true. Almost any recursive function can overflow the stack, but most of the time the data that we give the function makes it a very, very unlikely occurance. When, for instance, will you ever encounter an XML document with a node 1,000 levels deep? Pretty much never.


Uses of Recursion
One of the most common algorithms written recursively would be what we call a binary search.
As it turns out, this is one of the quickest ways to find data when we know all the data is already sorted.
Speaking of sorting, we have, well, sorting algorithms. Many sorting algorithms, including one of the fastest, the QuickSort, use recursion to help them along. The QuickSort algorithm spits the data into chunks and sorts each chunk seperately and recursively splits those into smaller chunks and sorts those.
Another very common use of recursion is to validate or parse some type of data. An XML file is an example, but many other forms of parsing, such as counting the number of times a word or phrase occurs in a sentence or book, can be performed efficiently with recursion.
