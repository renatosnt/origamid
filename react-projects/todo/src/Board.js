import React from "react";
import List from "./List";
import "./Board.css";

const Board = () => {
  return (
    <div className="board">
      <List title="A fazer" />
      <List title="Fazendo" />
      <List title="Concluidas" />
    </div>
  );
};

export default Board;
