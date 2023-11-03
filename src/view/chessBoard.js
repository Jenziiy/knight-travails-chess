export class ChessBoard {

  constructor(){
  }

  createBoard(){
    const main = document.getElementById('app'); 
    const chessTable = document.createElement('table'); 

    for (let i = 0; i < 8; i++) { 
        const tr = document.createElement('tr'); 
        for (let j = 0; j < 8; j++) { 
            const td = document.createElement('td'); 
            td.setAttribute('data', `[${[i]},${[j]}]`);
      
            if ((i + j) % 2 == 0) { 
                td.setAttribute('class', 'square white-tile'); 
                tr.appendChild(td); 
            } else { 
                td.setAttribute('class', 'square black-tile'); 
                tr.appendChild(td); 
            }
        } 
        chessTable.appendChild(tr); 
    } 
    main.appendChild(chessTable); 
    chessTable.setAttribute('cellspacing', '0'); 
    main.appendChild(chessTable);
  }
}
