class Board {
  graph = new Map();
  constructor(boardDimension = 8){
    this.boardDimension = boardDimension;
    this.setVertices(this.boardDimension);
    this.setEdges();
  };

  setVertices(){
    for (let i = 0; i < this.boardDimension; i++) {
      for (let j = 0; j < this.boardDimension ; j++) {
        this.graph.set(JSON.stringify([i,j]),[]);
      };
    };
  };

  setEdges(){
    for ( let [vertex] of this.graph ){
      const [x,y] = JSON.parse(vertex);
      const possibleMovesList = [ [-2, -1], [-2, 1], [2, 1], [-1, 2], [-1, -2], [1, -2], [1, 2], [2, -1] ];
      possibleMovesList.forEach(([cX,cY]) => {
      let adjVertex = JSON.stringify([(cX + x), (cY + y)]); 
      if(this.graph.has(adjVertex) && !this.graph.get(vertex).includes(adjVertex)) this.graph.get(vertex).push(adjVertex);
      });
    };
  };
};

function getShortestPath(startOfSomethingNew, finalDestination){
  const queue = [];
  const path = [];
  const setOfVisitedVertices = new Set();

  queue.push([startOfSomethingNew, [startOfSomethingNew]]);

  while( queue.length > 0 ){
    let [currentVertex, currentPath] = queue.shift();
    setOfVisitedVertices.add(currentVertex);
    if(currentVertex === finalDestination) path.push(currentPath);
    const adjacentVertices = gamePlay.graph.get(currentVertex.toString());
    for (let coords of adjacentVertices){
      if(!setOfVisitedVertices.has(coords)) queue.push([coords, [...currentPath, coords]])
    }
  }
  console.log(`To get from ${startOfSomethingNew} to ${finalDestination} as fast as possible.. \n follow ${path.toString().replaceAll('],[', '] => [')}`);
}


let gamePlay = new Board(8);
getShortestPath('[0,0]','[2,4]');