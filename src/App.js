import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import HeadBanner from './components/HeadBanner'; 
import Footer from './components/Footer'; 
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

  
  //Michelle: Don't know how to solve the below problem:
  //7.	Sort Tasks by Status
  const sortTasks = (status) => {
    const sortedTasks = tasks.filter((task) => task.status === status);
    setTasks(sortedTasks);
  };
  //7.	Sort Tasks by Status

  return (
    <div className="app-container">

      <div className="task-container">
        <HeadBanner /> 

        <TaskForm onAddForm={addTasks} />
        <TaskList tasks={tasks} />
        
        <button className="sorttask" onClick={() => sortTasks("in-progress")}>In Progress</button>
        <button className="sorttask" onClick={() => sortTasks("completed")}>Completed</button>
        <button className="sorttask" onClick={() => sortTasks("review")}>Review</button>

        <Footer />
        </div>
    </div>
  );
}

export default App;