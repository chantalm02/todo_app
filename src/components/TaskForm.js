import React, { useState } from 'react';

function TaskForm({ onAddForm }) {
    const [formData, setFormData] = useState({
      name: "",
      description: "",
      assigned: "",
      status: "",
      due: ""
    });
  
    const [error, setError] = useState("");
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
 
  
    return (
      
      <form>
        <h3>Add Task</h3>
        <div>
          <label>Task Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Assigned To: </label>
          <input
            type="assigned"
            name="assigned"
            value={formData.assigned}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description: </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4" 
            cols="40"
          />
        </div>
        <div>
          <label>Due Date: </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Status: </label>
          <select
            name="status"
            value={formData.assigned}
            onChange={handleInputChange}
          >
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="review">Review</option>
          </select>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="button-container">
        <button type="submit">Add Form</button></div>
      </form>
    
    );
  }
  
  export default TaskForm;