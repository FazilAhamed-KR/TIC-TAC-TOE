import { useState } from "react";
import Gamebox from "./component/GameBox";
import Header from "./component/Header";
import Player from "./component/Player";
import Log from "./component/Log";
import GameOver from "./component/GameOver";
import {
  Players,
  derivedActivePlayer,
  derivedPlayerBoard,
  derivedPlayerWinner,
} from "./helperFunction/helperFun";

function App() {
  const [gamePlayerName, setGamePlayerName] = useState(Players);
  const [playerTurn, setPlayerTurn] = useState([]);
  const activePlayer = derivedActivePlayer(playerTurn);
  const gameBoard = derivedPlayerBoard(playerTurn);
  const winner = derivedPlayerWinner(gameBoard, gamePlayerName);
  const matchDraw = playerTurn.length === 9 && !winner;

  const handleReset = () => {
    setPlayerTurn([]);
  };

  function handlePlayerNameChange(symbol, newName) {
    setGamePlayerName((prev) => {
      return {
        ...prev,
        [symbol]: newName,
      };
    });
  }

  const handleSelectSquare = (rowIndex, colIndex) => {
    setPlayerTurn((prev) => {
      const currentPlayer = derivedActivePlayer(prev);

      const updated = [
        { square: { row: rowIndex, col: colIndex }, playerName: currentPlayer },
        ...prev,
      ];
      return updated;
    });
  };

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name={Players.X}
              symbol="X"
              onChange={handlePlayerNameChange}
              activePlayer={activePlayer === "X"}
            />
            <Player
              name={Players.O}
              symbol="O"
              onChange={handlePlayerNameChange}
              activePlayer={activePlayer === "O"}
            />
          </ol>
          {(winner || matchDraw) && (
            <GameOver winner={winner} handleReset={handleReset} />
          )}
          <Gamebox
            onSelect={handleSelectSquare}
            board={gameBoard}
            winner={winner}
          />
        </div>
        <Log playerTurn={playerTurn} />
      </main>
    </>
  );
}

export default App;
