import React from "react";
import Game_img from "../assets/game-logo.png"

const Header = () => {
  return (
    <header>
      <img src={Game_img} alt="Hand-drawn tic-tac-toe image" />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
};

export default Header;
