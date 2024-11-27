import React from "react";

function TaskList({ tasks, onEditTask, onDeleteTask }) {

  const handleEdit = (task) => {
    const updatedName = prompt("Update task name:", task.name);
    const updatedDescription = prompt("Update description:", task.description)
    const updatedAssigned = prompt("Update assigned person:", task.assigned);
    const updatedStatus = prompt("Update task status:", task.status);
    const updatedDue = prompt("Update due date:", task.due);

    if (updatedName && updatedDescription && updatedAssigned && updatedStatus && updatedDue) {
      //creates updated task object
      const updatedTask = {
        name: updatedName,
        description: updatedDescription,
        assigned: updatedAssigned,
        status: updatedStatus,
        due: updatedDue,
      };
      onEditTask(task.id, updatedTask);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      onDeleteTask(id);
    }
  };

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

            <button className="edittask" onClick={() => onEditTask(task)}>Edit</button>
            <button className="edittask" onClick={() => onDeleteTask(task.id)}>Delete</button>

          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;