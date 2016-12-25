function Graph(v) {  this.vertices = v;  this.edges = 0;  this.adj = [];  for (var i = 0; i < this.vertices; ++i) {    this.adj[i] = [];    this.adj[i].push("");  }  this.addEdge = addEdge;  this.showGraph = showGraph;  this.dfs = dfs;  this.marked = [];  for (var i = 0; i < this.vertices; ++i) {    this.marked[i] = false;  }}function addEdge(v,w) {  this.adj[v].push(w);  this.adj[w].push(v);  this.edges++;}function showGraph() {  for (var i = 0; i < this.vertices; ++i) {    putstr(i + " -> ");    for (var j = 0; j < this.vertices; ++j) {      if (this.adj[i][j] != undefined) putstr(this.adj[i][j] + ' ');    }    print();  }}/*The algorithm for performing a depth-first search is relatively simple—visit avertex that has not already been visited, mark it as having been visited, thenrecursively visit the other unvisited vertices that are in the originalvertex’s adjacency list.*/function dfs(v) {  this.marked[v] = true;  if (this.adj[v] != undefined) {    print("Visited vertex: " + v);  }  for each (var w in this.adj[v]) {    if (!this.marked[w]) {      this.dfs(w);    }  }}/*The algorithm for breadth-first search uses a queue abstraction instead of anarray abstraction for storing visited vertices. The algorithm works as follows:1. Find an unvisited vertex that is adjacent to the current vertex,add it to the list of visited vertices, and add it to the queue.2. Take the next vertex, v, from the graph and add it to the list of visited vertices.3. Add all unmarked vertices that are are adjacent to v and add them to the queue.*/function bfs(s) {  var queue = [];  this.marked[s] = true;  queue.push(s); // add to back of queue  while (queue.length > 0) {    var v = queue.shift(); // remove from front of queue    if (v == undefined) {      print("Visited vertex: " + v);    }    for each (var w in this.adj[v]) {      if (!this.marked[w]) {        this.edgeTo[w] = v;        this.marked[w] = true;        queue.push(w);      }    }  }}/////////function solve(map, miner, exit) {  var result = [];  // TODO: note this function updates the given map //copy the map if should not be modified  //console.log("map: " + map);  var newMap = [];  for(var i = 0; i < map.length; i++) {    newMap[i] = [];    for(var j = 0; j < map[i].length; j++) {      newMap[i][j] = {};      newMap[i][j].value = map[i][j];      newMap[i][j].visited = false;      newMap[i][j].x = i;      newMap[i][j].y = j;    }  } // console.log("copied new map : " + JSON.stringify(newMap));  var pathStack = new Stack();  var currPosition = newMap[miner.x][miner.y];  currPosition.visited = true;  pathStack.push(currPosition);  while(pathStack.top != 0) {    console.log("hi");    var next = findUnvisitedAdjVertex(currPosition);    if(next == null) {      console.log("popping last element: "+ pathStack.peek());      pathStack.pop();    } else {    if(next.x == exit.x && next.y == exit.y) {      console.log("exit found");      return result;    }      pathStack.push(next);      currPosition = next;      console.log("Moved to current position of : " + JSON.stringify(currPosition));      currPosition.visited = true;    }  }  function findUnvisitedAdjVertex(pos) {    if (pos) {      console.log("within find vertex");      //console.log("1");     // console.log("1: ", pos.x > 1, newMap[pos.x - 1][pos.y], newMap[pos.x - 1][pos.y] == true , newMap[pos.x - 1][pos.y].visited == false);      //console.log("2: ", pos.y > 1,  newMap[pos.x][pos.y-1], newMap[pos.x][pos.y-1] == true, newMap[pos.x][pos.y-1].visited == false);      //console.log("3: ", pos.x+1 < newMap.length, newMap[pos.x + 1][pos.y], newMap[pos.x + 1][pos.y].value == true, newMap[pos.x + 1][pos.y].visited == false);      if(pos.x >= 1 && newMap[pos.x - 1] && newMap[pos.x - 1][pos.y] && newMap[pos.x - 1][pos.y].value == true  && newMap[pos.x - 1][pos.y].visited == false ) {        //left position is free and is unvisited        console.log("left");        result.push("left");        return newMap[pos.x-1][pos.y];      } else if (pos.y >= 1 && newMap[pos.x] && newMap[pos.x][pos.y-1] && newMap[pos.x][pos.y-1].value == true  && newMap[pos.x][pos.y-1].visited == false ) {        //top hasn't been visited and is free        console.log("up");        result.push("up");        return newMap[pos.x][pos.y-1];      } else if(pos.x+1 < newMap.length && newMap[pos.x + 1] && newMap[pos.x + 1][pos.y] && newMap[pos.x + 1][pos.y].value == true  && newMap[pos.x + 1][pos.y].visited == false ) {        //left position is free and is unvisited        console.log("right");        result.push("right")      //  console.log((newMap[pos.x + 1][pos.y] && newMap[pos.x + 1][pos.y].value == true  && newMap[pos.x + 1][pos.y].visited == false ));        return newMap[pos.x+1][pos.y];      } else if (pos.y+1 < newMap[0].length && newMap[pos.x] && newMap[pos.x][pos.y+1] && newMap[pos.x][pos.y+1].value == true  && newMap[pos.x][pos.y+1].visited == false ) {        //bottom hasn't been visited and is free        console.log("down");        result.push("down");        return newMap[pos.x][pos.y+1];      }    }    console.log("5");    return null;  }  console.log("before end");  return result;}function Stack() {  this.dataStore = [];  this.top = 0; // points to the empty space in the Stack yet to be filled  this.push = push;  this.pop = pop;  this.peek = peek;  function push(element) {    this.dataStore[this.top++] = element; //set the element at top and THEN increment top  }  function pop() {    return this.dataStore[--this.top];  }  function peek() {    return this.dataStore[this.top - 1];  }  function length() {    return this.top;  }  function clear() {    this.top = 0;  }}