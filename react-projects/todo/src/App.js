import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "./Board";
import Pomodoro from "./Pomodoro";

import "normalize.css";
import "./App.css";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <h1>FocusFlow</h1>
      <Pomodoro />
      <Board />
    </DndProvider>
  );
}

export default App;
