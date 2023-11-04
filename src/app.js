import { ChessBoard } from "./view/chessBoard.js";
Node.allInstances = [];

let KNIGHT_SET = false;
let END_SET = false;
let START = null;
let END = null;

const chessBoard = new ChessBoard();
chessBoard.createBoard();

class Node {
  map = new Map();
  constructor(position = null){
    this.position = position;
    this.map = map.set
    this.visited = false;
  }

  countSteps(){
   return ` ${this.ancestors.length()+1} amount of hops were needed for the shortest path `; 
  }
}

function getNeighborMoves(position){
  const queue = [];
const possibleMovesList = [ [-2, -1], [-2, 1], [2, 1], [-1, 2], [-1, -2], [1, -2], [1, 2], [2, -1] ];
possibleMovesList.forEach((coordinate) => {
  let nextDestinationX = coordinate[0] + position[0];
  let nextDestinationY = coordinate[1] + position[1];
  let nextDestination = [nextDestinationX, nextDestinationY]; 
  queue.push(nextDestination);
});
  return queue;
}

const squares = document.getElementsByClassName('square');
Array.from(squares).forEach(square => {
  
  square.addEventListener('click', () => { 
    if (KNIGHT_SET == false){
      START = JSON.parse(square.getAttribute('data'))
    square.setAttribute('id', 'knight') 
    KNIGHT_SET = true;
    } else if (KNIGHT_SET == true && END_SET == false){
      END = JSON.parse(square.getAttribute('data'));
      square.setAttribute('id', 'end');
      END_SET = true;
      getShortestPath(START, END);
  }
  });
});

function getShortestPath(start, end){
  let startingPosition = start;
  let finalDestination = end;
  const movesList = []
  const queue = [];
  const map = new Map();
  

  if (startingPosition.toString() === finalDestination.toString()) return console.log(`[${finalDestination}] only took 1 step`);
  queue.push(...getNeighborMoves(startingPosition));
  console.log(queue);
  let shortestPath = queue.find((el) => el.toString() === end.toString());
  if (shortestPath) return console.log(`[${start}] --> [${shortestPath}] took 2 steps`);
  while(!shortestPath && queue > 0){
  currentDestination = queue.shift();
    nodeSet.add(...getNeighborMoves(currentDestination));
    let knight = new Node(currentDestination);
 }
 console.log(hello);
}

