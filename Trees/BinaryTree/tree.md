# Trees

Trees are commonly used data structures in computer science. A tree is a non linear data structure that is used to store data in a hierarchical manner for hierarchical data such as files in a  file system and for storing sorted data.

A tree is made up of a set of nodes connected by edges. An example of a tree is a company's organizational structure.

The top node of the tree is called the root node. If a node is connected to other nodes below it, then the preceding node is called the parent node and the node below it are its children. A node can have zero, one or more nodes connected to it. A node without any child node is called as a leaf node.


## Binary Trees

The binary tree is chosen over other more primary data structures because you can search a binary tree very quickly(as opposed to a linked list) and you can easily insert and remove data from a binary tree(as opposed to an array)


Binary trees are trees which restrict the number of children to max 2.

Visiting all the nodes of a tree in a particular order is called as tree traversal.

A tree can be broken down into levels. The root node is at level 0, its children are at level 1, those nodes children are at level 2 and so on. A node at any level is considered a root of a subtree, which consist of that nodes children , then their children and so on. we can define the depth of the tree as the number of layers in the tree.

Each node in a tree has a value associated with it, it is called as the the key value.

In binary tree, the child node of a parent node are referred to as the left node and the right node. For certain binary tree implementations, certain data values can be stored only in the left node and other only on the right node.

## Binary Search tree

A binary search tree is a binary tree in which the data with the lesser value is stored in left nodes and data with greater values are stored in the right nodes.


There are three traversal functions used with BSTs: inorder, preorder, and postorder. An inorder traversal visits all of the nodes of a BST in ascending order of the node key values. A preorder traversal visits the root node first, followed by the nodes in the sub‐ trees under the left child of the root node, followed by the nodes in the subtrees under the right child of the root node. A postorder traversal visits all of the child nodes of the left subtree up to the root node, and then visits all of the child nodes of the right subtree up to the root node.
Although it’s easy to understand why we would want to perform an inorder traversal, it is less obvious why we need preorder and postorder traversals.
