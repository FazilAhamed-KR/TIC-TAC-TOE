export const Players = {
  X: "player 1",
  O: "player 2",
};

export const startingStage = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const derivedActivePlayer = (playerTurn) => {
  let currentPlayer = "X";

  if (playerTurn.length > 0 && playerTurn[0].playerName === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

export function derivedPlayerBoard(playerTurn) {
  let gameBoard = [...startingStage.map((array) => [...array])];

  for (const playerTurns of playerTurn) {
    const { square, playerName } = playerTurns;
    const { row, col } = square;
    gameBoard[row][col] = playerName;
  }
  return gameBoard;
}

import WINNING_COMBINATIONS from "../data/Data";

export function derivedPlayerWinner(gameBoard, gamePlayerName) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstWiningSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondWiningSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdWiningSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstWiningSymbol &&
      firstWiningSymbol === secondWiningSymbol &&
      firstWiningSymbol === thirdWiningSymbol
    ) {
      winner = gamePlayerName[firstWiningSymbol];
    }
  }
  return winner;
}
