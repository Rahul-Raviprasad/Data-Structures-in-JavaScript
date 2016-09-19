# Tree

## Tree Definitions

Ordered  Tree is one in which the children of each node are ordered.

Binary tree: Ordered tree will all nodes having at most 2 children.

### Recursive Definition of a Binary Tree
A binary tree is either a leaf or an internal node (the root) and one or two binary trees(left subtree and/or right subtree).

## Complete Binary Tree
* level i has 2^i nodes
* In a tree of height h
  * leaves are at level h
  * No. of leaves is 2^h
  * No. of internal nodes = 1 + 2 + 2^2 + .... + 2^h-1 = (2^h)-1
  * No. of internal nodes =  no. of leaves -1
  * Total no. of nodes is (2^(h+1)) - 1) = n
* In a tree of n nodes
  * No of leaves is (n+1)/2
  * Height = log(base2) (no of leaves)

  * A Binary tree can be obtained from an appropriate complete binary tree by pruning.


## Minimum height of a binary tree
* A binary tree of height h has
  1. At most 2^i nodes at level i
  2. At most 1+@+2^2 + ... + 2^h = (2^(h+1) - 1) nodes

* If the tree has n nodes then
  1. n <= (2^(h+1) -1)
  2. Hence h >= log(base 2)(n+1)/2