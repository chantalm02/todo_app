import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      <h3>Task List</h3>
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
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;