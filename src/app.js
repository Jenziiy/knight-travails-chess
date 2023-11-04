import { ChessBoard } from "./view/chessBoard.js";
import { getShortestPath } from "./shortestPath.js";
import { Board } from "./Model/board.js";

let KNIGHT_SET = false;
let END_SET = false;
let START = null;
let END = null;

const chessBoard = new ChessBoard();

const squares = document.getElementsByClassName('square');
const pStats = document.createElement('p');
const pPath = document.createElement('p');
const main = document.getElementById('app');
Array.from(squares).forEach(square => {
  
  square.addEventListener('click', () => { 
    if (KNIGHT_SET === false){
      console.log(square.getAttribute('data'))
      START = square.getAttribute('data')
    square.setAttribute('id', 'knight') 
    KNIGHT_SET = true;
    } else if (KNIGHT_SET === true && END_SET === false){
      END = square.getAttribute('data');
      square.setAttribute('id', 'end');
      END_SET = true;
      const resultingShortestPath = getShortestPath(START, END, gamePlay);
      pStats.textContent = resultingShortestPath.gameInfo;
      main.appendChild(pStats);
      pPath.textContent = resultingShortestPath.pathInfo;
      main.appendChild(pPath);
  }
  });
});
  
let gamePlay = new Board();
