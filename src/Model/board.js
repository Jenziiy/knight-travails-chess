export class Board {
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