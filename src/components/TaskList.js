import React from "react";

function TaskList({ tasks, setTasks }) {
  
  //Michelle: Don't know how to solve the below problem:
  //6.	Edit and Remove Tasks
  const editTask = (id) => {
    const updatedName = prompt("Update task name:");
    if (updatedName) {
      setTasks(id, { name: updatedName });
    }
  };

  const deleteTask = (id) => {
    console.log("Deleting task with ID:", id);
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };
  //6.	Edit and Remove Tasks
 

  return (
    <div className="task-list">
      <h3 style={{textAlign:'center', fontSize: 30}}>Task List</h3>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-card">
            <h4>{task.name}</h4>
            <p>
              <strong>Description: </strong> {task.description}
            </p>
            <p>
              <strong>Assigned To: </strong> {task.assigned}
            </p>
            <p>
              <strong>Status: </strong> {task.status}
            </p>
            <p>
              <strong>Due: </strong> {task.due}
            </p>
            <p>
              <strong>ID: </strong> {task.id}
            </p>

            <button className="edittask" onClick={() => editTask(task.id)}>Edit</button>
            <button className="edittask" onClick={() => deleteTask(task.id)}>Delete</button>

          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;