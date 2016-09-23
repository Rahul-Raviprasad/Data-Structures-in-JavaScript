# Graphs

The efficiency of the graph algorithms largely depends on the data structure used to represent it.

## Graph Definitions

A graph consists of a set of vertices and a set of edges. Edges are defined as a pair(v1, v2) where v1 and v2 are two vertices on the graph. A vertex can also have a weight, which is sometimes called a cost. A graph whose pairs are ordered are called a directed graph or just a digraph. When pairs are ordered in a directed graph, an arrow is drawn from one pair to another pair. Directed graphs show the flow direction from one vertex to another. A flow chart that that explains the directions of computations in a computer program is an example of directed graph.

If a graph is not ordered then it is called a unordered graph.

A path is a sequence of vertices in a graph such that all vertices in the path are connected by edges. The length of a path is the number of edges from the first vertex in the path to the last vertex. A path can also consist of a vertex to itself. which is called as a loop. loops have a length of 0.

A cycle is a path with at least one edge whose first and last vertices are the same. A simple cycle is one with no repeated edges or vertices for both directed and undirected graphs. Paths that repeat other vertices besides the first and last vertices are called general cycles. Two vertices are considered strongly connected if there is a path from the first vertex to the second vertex, and vice versa. If the graph is a directed graph, and all its vertices are strongly connected, then the directed graph is considered strongly connected.

## Real-World Systems Modeled by Graphs

Graphs are used to model many different types of real-world systems. One example is traffic flow. The vertices represent street intersections, and the edges represent the streets. Weighted edges can be used to represent
speed limits or the number of lanes. Modelers can use the system to determine the best routes and the streets most likely to suffer from traffic jams. Any type of transportation system can be modeled using a graph. For example, an airline can model its flight system using a graph. Each airport is a vertex, and each flight from one vertex to another is an edge. A weighted edge can represent the cost of a flight from one airport to another, or perhaps the distance from one airport to another, depending upon what is being modeled.

Computer networks, including local area networks and much broader networks such as the Internet, are also frequently modeled with graphs.

Another example of a real- word system that can be modeled by a graph is a consumer market, where vertices represent both institutions (vendors) and consumers.

## Adjacency list
link: https://en.wikipedia.org/wiki/Adjacency_list
In graph theory and computer science, an adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a vertex in the graph. This is one of several commonly used representations of graphs for use in computer programs.

## What is a Graph?
* A graph is a generally represented by a 2 tuple
    A graph G = (V,E) is composed of:
    V: set of vertices
    E: set of edges connecting the vertices in V
* An edge e = (u,v) where u, v are a pair of vertices

A graph like this

a ------- b
|  \      |
|   \     |
|    c    |
|   /  \  |
|  /    \ |
d ------- e

can be represented as following
V = {a, b, c, d, e}
E = {(a,b), (a,c), (a,d), (b,e), (c,d), (c,e),(d,e)}

## Applications
1. Electronic circuits
  To find the path of least resistance
2. Networks
  * Roads maps
  * Communication networks
3. Decision graphs(generally directed)
In the case of a directed graph, the edges would be an ordered pair, where the ordering is important as it tells us the direction of the graph edge is.

## Graph Terminology
* Adjacent vertices: vertices connected by an edge.
* Degree(of a vertex): Number of Adjacent vertices.
* An edge is said to be incident on 2 vertices
* What is the sum of the degrees of all vertices?
* Twice the number of edges, since adjacent vertices each count the adjoining edge, it will be counted twice
* Path: sequence of vertices v1, v2, ...vk such that consecutive vertices vi and vi+1 are adjacent.
* Simple Path: no repeated vertices
* Cycle: simple path, except that the last vertex is the same as the first vertex.
* Connected graph: any two vertices are connected by some path
* Subgraph: subset of vertices and edges forming a graph
* connected component: maximal connected subgraph.
* (free) tree: connected graph without cycles.
* forest - collection of trees.

## Connectivity
* Let n = Number of vertices, and m = Number of edges
* Complete graph: one in which all pairs of vertices are adjacent.
* How many edges(m) does a complete graph(G) have?
  There are n(n-1)/2 pairs of vertices and so m = n(n-1)/2.
* How many edges does a complete directed graph have? twice as above since each edge will be in both directions
* Minimum number of edges on a graph? zero
* for a tree m = n-1
* if m < n-1, G is not connected
