import React from "react";

const GameOver = ({ winner, handleReset }) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>Player {winner} won the game!</p>}
      {!winner && <p>Match Draw</p>}
      <button onClick={handleReset}>Restart..!</button>
    </div>
  );
};

export default GameOver;
