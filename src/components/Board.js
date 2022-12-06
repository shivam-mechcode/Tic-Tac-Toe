import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setXNext] = useState(true);
  // const [winner, setWinner] = useState("No one");

  const checkWinner = () => {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic = 0; logic < winningCombination.length; logic++) {
      console.log(logic);
      const [a, b, c] = winningCombination[logic];
      if (
        square[a] !== null &&
        square[a] === square[b] &&
        square[a] === square[c]
      ) {
        return square[a];
      }
      console.log(a, b, c);
    }
    return false;
  };

  const handleClick = (index) => {
    if (square[index] !== null) {
      return;
    }
    const copySquare = [...square];
    copySquare[index] = isXNext ? "X" : "O";

    setSquare(copySquare);
    setXNext(!isXNext);
  };

  const handleReset = () => {
    setSquare(Array(9).fill(null));
  };
  const isWinner = checkWinner();
  return (
    <>
      <div>
        <div className="heading">TIC-TAC-TOE</div>
        <div className="board-container">
          <>
            <div className="winnerDeclare">Winner :{isWinner}</div>
            <button onClick={handleReset}>Reset</button>
            <div>Please {isXNext ? "X" : "O"} make your move</div>
            <div className="board-row">
              <Square onClick={() => handleClick(0)} value={square[0]} />
              <Square onClick={() => handleClick(1)} value={square[1]} />
              <Square onClick={() => handleClick(2)} value={square[2]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(3)} value={square[3]} />
              <Square onClick={() => handleClick(4)} value={square[4]} />
              <Square onClick={() => handleClick(5)} value={square[5]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(6)} value={square[6]} />
              <Square onClick={() => handleClick(7)} value={square[7]} />
              <Square onClick={() => handleClick(8)} value={square[8]} />
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Board;
