import React from "react";
import "./List.css";
import { BiEditAlt, BiTrashAlt } from "react-icons/bi";
import { useDrag } from "react-dnd";

const List = ({ title }) => {
  const [input, setInput] = React.useState("");
  const [list, setList] = React.useState([]);
  const [{ isDragging }, dragRef] = useDrag({
    type: "TASK",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  function handleInput({ target }) {
    setInput(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      text: input,
      isEnabled: true,
    };
    const newList = [...list, newTask];
    setList(newList);
    setInput("");
  }

  function markTask(id) {
    const newList = list.map((task) => {
      if (task.id === id) {
        task.isEnabled = !task.isEnabled;
      }
      return task;
    });
    setList(newList);
  }

  return (
    <div className="list">
      <header className="list-title">{title}</header>
      <ul className="task-list">
        {list.map((task) => (
          <li
            key={task.id}
            className={task.isEnabled ? "task" : "task marked"}
            onClick={() => markTask(task.id)}
            ref={dragRef}
            isDragging={isDragging}
          >
            <span>{task.text}</span>
            <div className="icons">
              <BiEditAlt />
              <BiTrashAlt />
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Adicione uma tarefa"
        />
      </form>
    </div>
  );
};

export default List;
