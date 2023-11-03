import { ChessBoard } from "./view/chessBoard.js";

let KNIGHT_SET = false;
let END_SET = false;
let START = null;
let END = null;

const chessBoard = new ChessBoard();
chessBoard.createBoard();

const squares = document.getElementsByClassName('square');
Array.from(squares).forEach(square => {
  
  square.addEventListener('click', () => { 
    if (KNIGHT_SET == false){
      START = [square.getAttribute('id')]
    square.setAttribute('id', 'knight') 
    KNIGHT_SET = true;
    } else if (KNIGHT_SET == true && END_SET == false){
      END = [square.getAttribute('id')];
      square.setAttribute('id', 'end');
      END_SET = true;
      console.log(START, END);
  }
  });
});