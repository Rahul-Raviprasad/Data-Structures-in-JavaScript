#LinkedLists

LinkedList is a collection of objects called nodes. Each node is linked to a successor node in the list using an object reference. The reference to another node is called a link.

While Array elements are referenced by their positions, linked list elements are referenced by their relationship to other elements of the linked list, and the last node points to a null node.

Marking the beginning of the LinkedList can be a problem, many implementations have a special node called head to denote the beginning of the LinkedList.

Insertion and removal are the main functions of a LinkedList.

LinkedList provide a simple. flexible representation for dynamic sets.

## Doubly LinkedList
A set of node or objects, each of which with a key and two other pointers attribute: next and prev.
Given an element x in the list x.next points to successor in the linked list and x.prev points to the predecessor.
if x.prev = null -> then x is head
if x.next = null -> then x is tail
For list L L.head point to the head of the list.
if L.head = null then the List is empty.
