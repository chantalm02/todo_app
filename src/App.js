import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on initialization
  useEffect(() => {
    const saveTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saveTasks);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTasks = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="app-container">
      <h1>Task To Do App</h1>
      <TaskForm onAddForm={addTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;