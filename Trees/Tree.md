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

## Maximum height of a binary tree
* A binary tree on n nodes has a height at most n-1
* This is obtained when every node (except the leaf) has one child.

## Number of leaves in a binary tree
* no. of leaves <= 1+ no. of internal nodes.
* Proof by induction: on the number of nodes
  Tree with 1 node : has a leaf but no internal node.
  Assume statement true for tree with k-1 internal node
  So for a tree with k internal nodes has k1 internal nodes in left, and (k-k1-1) internal nodes in the right subtree.
  No.leaves < = (k1+1) + (k-k1) = k+1

##  For a binary tree on n nodes
* No. of leaves + no. of internal nodes = n
* No. of leaves <= No.of internal nodes + 1
* Hence, No. of leaves <= (n+1)/2
* Minimum no. of leaves is 1

## ADTs for Trees
* generic container methods: size(), isEmpty(), elements()
* positional container methods: positions(), swapElements(p,q), replaceElement(p,e)
* query methods: isRoot(p), isInternal(p), isExternal(p)
* accessor methods: root(), parent(p), children(p), leftChild(p), rightChild(p), sibling(p)
* update methods:
  * expandExternal(p), removeAboveExternal(p)
  * other application specific methods.

## The Node Structure
Each node in the tree contains
* key[x] - key
* left[x] - pointer to left child
* right[x] - pointer to right child
* p[x] - pointer to parent node

## Unbounded Branching
Unbounded Tree:
Parent: UnboundedTree
firstChild: UnboundedTree: Allows you to access the other siblings through a linkedList
RightChild: UnboundedTree
