import React from "react";

const TaskForm = ({ addTask }) => {
  const [input, setInput] = React.useState("");

  function handleChange({ target }) {
    setInput(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTask({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={input} />
      <button>Adicionar tarefa</button>
    </form>
  );
};

export default TaskForm;
