//Stack

/*
A stack is a list of elements that are accessible only from one end of the list,
which is called the top.
One commone real world example is a stack of trays.
You place new trays on the top and pick one from the top.

The Stack is known as a Last In First Out Data Structure (LIFO).
Becuase of the LIFO nature any element which is not at the top of the stack,
cannot be accessed. To get the element at the top of the stack, you need to
dispose of all the elements on top it.

The 2 primary operations on stacks are adding - push and removing
pop operations

Another operation is peek - viewing the top element in the stack.

When to use the Stack?

There are  several problems for which Stacks are perfect DataStructures like

1. Multiple Base conversions
A stack can be used to convert a number from one base to another Base.
Given a number n, which we want to convert from "a" to base "b",
here is the algorithm for this conversion(Note: this only works for bases 2 to 9)
  1.1 The rightmost digit of n is n%b. Push this digit onto the stack.
  1.2 Replace n with n/b
  1.3 Repeat steps 1 and 2 until n = 0 and there are no significant digits remaining.
  1.4 Build the converted number string by popping the stack until the stack is empty.



*/

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

/*
2. Palindromes
 A palindrome is a word, sentence or number which is spelled same
 from left to right and right to left. eg. Dad, 1001

 Logic: We can use a stack to determine whether or not a given string
 is a palindrome. We take the original string and push each character
 onto a stack, moving from left to right. When the end of the string
 is reached, the stack contains the original string in reverse order,
 with the last letter at the top of the stack and the first letter at
 the bottom of the stack.
*/

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

/*
3. Demonstrating Recursion

We can use stacks to simulate recursive processes.
Few links :
http://www.htmlgoodies.com/primers/jsp/article.php/3622321
http://blog.moertel.com/posts/2013-05-11-recursive-to-iterative.html
http://stackoverflow.com/questions/159590/way-to-go-from-recursion-to-iteration
http://stackoverflow.com/questions/1549943/design-patterns-for-converting-recursive-algorithms-to-iterative-ones


*/

//A recursive function for factorial
function factorial(number) {
  if(number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log("factorial methid using recursion of 4 should return 24: factorial(4): " + factorial(4));

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
