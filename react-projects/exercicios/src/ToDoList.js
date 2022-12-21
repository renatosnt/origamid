import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", status: "todo" },
    { id: 2, title: "Task 2", status: "in-progress" },
    { id: 3, title: "Task 3", status: "done" },
  ]);

  function moveTask(taskId, newStatus) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      })
    );
  }

  return (
    <div className="kanban-board">
      <div className="column todo">
        <h3>To Do</h3>
        {tasks
          .filter((task) => task.status === "todo")
          .map((task) => (
            <div key={task.id} className="task">
              {task.title}
              <button onClick={() => moveTask(task.id, "in-progress")}>
                Move to In Progress
              </button>
            </div>
          ))}
      </div>
      <div className="column in-progress">
        <h3>In Progress</h3>
        {tasks
          .filter((task) => task.status === "in-progress")
          .map((task) => (
            <div key={task.id} className="task">
              {task.title}
              <button onClick={() => moveTask(task.id, "done")}>
                Move to Done
              </button>
            </div>
          ))}
      </div>
      <div className="column done">
        <h3>Done</h3>
        {tasks
          .filter((task) => task.status === "done")
          .map((task) => (
            <div key={task.id} className="task">
              {task.title}
            </div>
          ))}
      </div>
    </div>
  );
}

export default ToDoList;
