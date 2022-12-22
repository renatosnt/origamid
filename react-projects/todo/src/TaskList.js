import React from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [tasks, setTasks] = React.useState([]);

  // tenho que atualizar tasks quando uma nova task chegar

  function addTask(task) {
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  }

  function completeTask(id) {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function removeTask(id) {
    let updatedTasks = tasks.filter((task) => {
      if (task.id === id) {
        return false;
      }
      return true;
    });
    setTasks(updatedTasks);
  }

  function editTask(id, newValue) {
    setTasks((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  }
  return (
    <div>
      <TaskForm addTask={addTask} />
      <Task
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        editTask={editTask}
      />
    </div>
  );
};

export default TaskList;
