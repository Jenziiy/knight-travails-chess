import { ChessBoard } from "./view/chessBoard.js";
Node.allInstances = [];

let KNIGHT_SET = false;
let END_SET = false;
let START = null;
let END = null;

const chessBoard = new ChessBoard();
chessBoard.createBoard();

class Node {
  constructor(currentNode, childNodes = null){
    this.ancestors = ancestors.push(currentNode);
    this.current = currentNode;
    this.next = childNodes;
    this.visited = false;
    Node.allInstances.push(this);
  }

  countSteps(){
   return ` ${this.ancestors.length()+1} amount of hops were needed for the shortest path `; 
  }
}

function enqueue(position){
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
  const queueChild = [];
  const nodeSet = new Set();
  

  if (startingPosition.toString() === finalDestination.toString()) return console.log(`[${finalDestination}] only took 1 step`);
  queue.push(...enqueue(startingPosition));
  console.log(queue);
  let hello = queue.find((el) => el.toString() === end.toString());
  if (hello) return console.log(`[${start}] --> [${hello}] took 2 steps`);
  while(!hello && queue > 0){
  currentDestination = queue.shift();
    new Node(null,)
    nodeSet.add(...enqueue(currentDestination));
 }
 console.log(hello);
}

