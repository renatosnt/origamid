import React from "react";

function App() {
  const [list, setList] = React.useState(null);

  function addTodo(text) {
    const newTodos = [...list, { text }];
    setList(newTodos);
  }

  function markTodo(index) {
    const newTodos = [...list];
    newTodos[index].isDone = true;
    setList(newTodos);
  }

  return <div></div>;
}

export default App;
