export function getShortestPath(startOfSomethingNew, finalDestination, board){
  const queue = [];
  const path = [];
  const setOfVisitedVertices = new Set();

  queue.push([startOfSomethingNew, [startOfSomethingNew]]);

  while( queue.length > 0 ){
    let [currentVertex, currentPath] = queue.shift();
    setOfVisitedVertices.add(currentVertex);
    if(currentVertex === finalDestination) path.push(currentPath);
    console.log(currentVertex);
    const adjacentVertices = board.graph.get(currentVertex);
    for (let coords of adjacentVertices){
      if(!setOfVisitedVertices.has(coords)) queue.push([coords, [...currentPath, coords]])
    }
  }
return {
  gameInfo: `To get from ${startOfSomethingNew} to ${finalDestination} as fast as possible..`,
  pathInfo: `${path[0].toString().replaceAll('],[', '] => [')}`,
};
}