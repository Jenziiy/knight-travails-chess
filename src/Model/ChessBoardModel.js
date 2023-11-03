import { Node } from "./NodeModel.js";

class ChessBoardModel {
  constructor() {
    this.knightMovesArr = [ [-2, -1], [-2, 1], [2, 1], [-1, 2], [-1, -2], [1, -2], [1, 2], [2, -1] ];
    this.chessBoardNodeArr = [];
    this.setChessBoardNodeArr();
  }

  setChessBoardNodeArr(){
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const newNode = new Node(i, j);
        this.chessBoardNodeArr.push(newNode);
      }
      return this.chessBoardNodeArr;
    }
  }
}

export { ChessBoardModel };