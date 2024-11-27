import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import HeadBanner from './components/HeadBanner'; 
import Footer from './components/Footer'; 
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); //holds the current displayed tasks
  const [allTasks, setAllTasks] = useState([]); //holds all of the tasks

  // Load tasks from localStorage on initialization
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
    setAllTasks(savedTasks); //saves original tasks for resetting
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //adds new task
  const addTasks = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    setAllTasks(newTasks); // Make sures original tasks are updated
  }

  const sortTasks = (status) => {
    if(status === "all") {
      //shows all tasks
      setTasks(allTasks);
    } else {
      //filters tasks
      const sortedTasks = allTasks.filter((task) => task.status === status);
      setTasks(sortedTasks);
    }
  };

  //edit task
  const editTask = (id, updatedTask) => {
    const updatedTasks = tasks.map((task) => 
    task.id === id ? {...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    setAllTasks(updatedTasks);// updates original tasks after edit
  };

  //deletes task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id != id);
    setTasks(updatedTasks);
    setAllTasks(updatedTasks); //updates original list after deletion
  }

  return (
    
    <div className="app-container">
      <div className="task-container">
        <HeadBanner /> 
        <h3 style={{textAlign:'center', fontSize: 30}}>Task List</h3>
        {/*Sorting Buttons*/}
        <button className="sorttask" onClick={() => sortTasks("in-progress")}>In Progress</button>
        <button className="sorttask" onClick={() => sortTasks("completed")}>Completed</button>
        <button className="sorttask" onClick={() => sortTasks("review")}>Review</button>
        <button className="sorttask" onClick={() => sortTasks("all")}>All Tasks</button> {/* To show all tasks */}
        <TaskForm onAddForm={addTasks} />
        <TaskList
          tasks={tasks}
          onEditTasks={editTask}
          onDeleteTask={deleteTask}
        />
        
        <Footer />
        </div>
    </div>
  );
}

export default App;