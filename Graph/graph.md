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

## Spanning Tree
* A spanning tree of G is a subgraph which is a tree and which contains all vertices of G
* Failure on any edge disconnects system(least fault tolerant)

## The Bridges of Koenigsberg
* suppose you are a postman, and you didn't want to retrace your steps.
* In 1736, Euler proved that this is not possible.

* Multi Graph: there can be multiple edges between a pair of vertices
* Eulerian Tour: path that traverses every edge exactly once and returns to the first vertex.
* Euler's Theorem: A graph has a Eulerian Tour if and only if all vertices have even degree.

## The Graph ADT
* The Graph ADT is a positional container whose positions are the vertices and the edges of the graph.
  * size() Return the number of vertices + number of edges of G.
  * isEmpty()
  * elements()
  * positions()
  * swap()
  * replaceElement()
* Notation: Graph G; Vertices v,w; Edge e; Object o
  * numVertices() Return the number of vertices of G.
  * numEdges() Return the number of edges of G
  * vertices() Return an enumeration of the vertices of G.
  * edges() Return an enumeration of the edges of G.
  * directedEdges() enumeration of all directed edges in G.
  * undirectedEdges() enumeration of all undirected edges in G.
  * incidentEdges() enumeration of all edges incident on v.
  * inIncidentEdges(v) enumeration of all edges entering v.
  * outIncidentEdges(v) enumeration of all edges leaving v.
  * opposite(v, e) an endpoint of e distinct from v
  * degree(v) the degree of v.
  * inDegree(v) the in-degree of v.
  * outDegree(v) the out-degree of v.
  * adjacentVertices(v) enumeration of vertices adjacent to v.
  * inAdjacentVertices(v) enumeration of vertices adjacent to v along incoming edges.
  * areAdjacent(v,w) whether vertices v and w are adjacent.
  * endVertices(e) the end vertices of e.
  * origin(e) the end vertex from which e leaves
  * destination(e) the end vertex at which e arrives.
  * isDirected(e) true iff e is directed.
* Update Methods
  * makeUndirected(e) Set e to be an undirected edge.
  * reverseDirection(e) Switch the origin and destination vertices of e.
  * setDirectionFrom(e,v) Sets the direction of e away from v, one of its end vertices.
  * setDirectionTo(e,v) Sets the direction of e towards v, one of its end vertices.
  * insertEdge(v,w,o) Insert and return an undirected edges between v and w, storing o at this position.
  * insertDirectedEdge(v,w,o) Insert and return a directed edge between v and w, storing o at this position.
  * insertVertex(o) Insert and return a new (isolated) vertex storing o at this position.

## Data Structures for Graphs
* Edge list
* Adjacency lists
* Adjacency matrix

How can we represent graphs?
To start with, we store the vertices and the edges into two containers, and each edge object has references to the vertices it connects.
Additional structures can be used to perform efficiently the methods of the Graph ADT

### Edge list
* The edges list structure simply stores the vertices and edges in two unsorted sequences.
* Easy to implement.
* Finding the edges incident on a given vertex is inefficient since it requires examining the entire edge sequence.

#### Performance of Edge List
Operation vs Time
size, isEmpty, replaceElement, swap    ------ O(1)
numVertices, numEdges ----------------------- O(1)
vertices                    ----------------- O(n)
edges, directedEdges, undirectedEdges ------- O(m)
elements, positions         ----------------- O(n+m)
endVertices, opposite, origin, destination, isDirected --- O(1)
incidentEdges, inIncidentEdges, outIncidentEdges, adjacentVertices,
inAdjacentVertices, outAdjacentVertices, areAdjacent, degree, inDegree, outDegree --- O(m)

insertVertex, insertEdge, insertDirectedEdge, removeEdge, makeUndirected, reverseDirection, setDirectionFrom, setDirectionTo              ----  O(1)
removeVertex                --------- O(m)

### Adjacency List (Traditional)
* adjacency list of


### Converting a maze to graph
https://aakritty.wordpress.com/2014/03/02/shortest-path-through-a-maze/
