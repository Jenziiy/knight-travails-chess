import { ChessBoard } from "./view/chessBoard.js";
import { getShortestPath } from "./shortestPath.js";
import { Board } from "./Model/board.js";

let KNIGHT_SET = false;
let END_SET = false;
let START = null;
let END = null;

const chessBoard = new ChessBoard();

const squares = document.getElementsByClassName('square');
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
      getShortestPath(START, END, gamePlay);
  }
  });
});
  
let gamePlay = new Board();
