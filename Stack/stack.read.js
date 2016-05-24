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
