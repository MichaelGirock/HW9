import React from 'react';
import './Board.css';
import { useState } from "react";
import { Box } from './Box.js'

export function Board(props){
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  
    function XO(space) {
        const newBoard=board.slice()
        newBoard[space]='X'
        setBoard(newBoard)

    }

    const item = board.map((v, indx) => 
         <div className="box" key={indx} onClick={()  => XO(indx)}>{v}</div>
    )
    

    
    return(

            <div className="board">
             { item }
            </div>
 
    

    )
}


export default Board;
