import React from "react";
import List from "./List";
import "./Board.css";

const Board = () => {
  return (
    <div className="board">
      <List title="Segunda" />
      <List title="Terça" />
      <List title="Quarta" />
      <List title="Quinta" />
      <List title="Sexta" />
    </div>
  );
};

export default Board;
