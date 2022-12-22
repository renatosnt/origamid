import React from "react";
import { CgTrash } from "react-icons/cg";
import { AiOutlineEdit } from "react-icons/ai";
import "./Task.css";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import TaskForm from "./TaskForm";

const Task = ({ tasks, completeTask, removeTask, editTask }) => {
  const [edit, setEdit] = React.useState({
    id: null,
    value: "",
  });

  function submitEdit(event) {
    console.log(event);
    // editTask(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  }

  if (edit.id) {
    return <TaskForm addTask={null} onSubmit={() => submitEdit()} />;
  }

  return tasks.map((task, index) => (
    <div
      className={task.isComplete ? "task-row complete" : "task-row"}
      key={index}
    >
      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.text}
      </div>
      <div className="icons">
        <CgTrash onClick={() => removeTask(task.id)} />
        <AiOutlineEdit
          onClick={() => setEdit({ id: task.id, value: task.text })}
        />
      </div>
    </div>
  ));
};

export default Task;
