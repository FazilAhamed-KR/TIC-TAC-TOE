import React from "react";

const Log = ({ playerTurn }) => {
  return (
    <ol id="log">
      {playerTurn.map((playerTurns) => (
        <li key={`${playerTurns.square.row}${playerTurns.square.col}`}>
          {playerTurns.playerName} Selected {playerTurns.square.row},
          {playerTurns.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
