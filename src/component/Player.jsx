import React, { useState } from "react";

const Player = ({ name, symbol, activePlayer, onChange }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [gamePlayerName, setGamePlayerName] = useState(name);
  function handleClick() {
    if (isEdit) {
      debugger
      setIsEdit(false);
      onChange(symbol, gamePlayerName);
    } else {
      setIsEdit(true);
    }
  }
  let playerName = <span className="player-name">{gamePlayerName}</span>;

  if (isEdit) {
    playerName = (
      <input
        type="text"
        required
        value={gamePlayerName}
        onChange={(e) => setGamePlayerName(e.target.value)}
      ></input>
    );
  }

  return (
    <li className={activePlayer ? "active" : undefined}>
      <span className="player">
        {/* {isEdit ? (
          <input
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          >
            {playerName}
          </input>
        ) : (
          <span className="player-name">{name}</span>
        )} */}
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
