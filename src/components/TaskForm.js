import React, { useState } from 'react';

function TaskForm({ onAddForm }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    assigned: "",
    status: "",
    due: ""
  });

  const [error, setError] = useState("");
  
  //handles the input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    // Check if all required fields are filled
    if (!formData.name || !formData.assigned || !formData.status || !formData.due) {
      setError("Please fill in all required fields.");
      return false;
    }

    // Check if the due date is valid (e.g., not in the past)
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    if (formData.due < today) {
      setError("Due date cannot be in the past.");
      return false;
    }

    // // Clear error
     setError("");
     return true;
    };

    const handleShowForm= () => {
      setIsFormVisible(true);
      setIsFormSubmitted(false); //reset submission state when form is shown again
    }
  

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Add a unique ID to the contact
    const newForm = { ...formData, id: Date.now() };

    // Validate the form
    if (validateForm()) {
      // If validation passes, call the onAddForm function
      // Pass the contact to the parent component
      onAddForm(newForm);;
  
      setIsFormVisible(false);
      setIsFormSubmitted(true);
    
      // // Clear the form fields
      setFormData({
        name: "",
        description: "",
        assigned: "",
        status: "",
        due: ""
      });
    } else {
    }
    };
  
  

    return (
      <div className="button-container">
      {/* Show 'Create New Task' button when the form is hidden and not yet submitted */}
      {!isFormVisible && !isFormSubmitted && (
        <button onClick={handleShowForm} className="create-task">
          + Create New Task
        </button>
      )}

      {/* Show form if 'isFormVisible' is true */}
      {isFormVisible && !isFormSubmitted && (
        <form onSubmit={handleSubmit}>
            <h3 style={{ textAlign: 'center', fontSize: 30 }}>Add Task</h3>
            <div>
              <label>Task Name: </label>
              <input
                type="text"
                name="name"
                placeholder="Task Name"
                value={formData.name}
                onChange={handleInputChange}
                className="forminput"
                required
              />
            </div>
  
            <div>
              <label>Description: </label>
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                cols="50"
                className="forminput"
                required
              />
            </div>
  
            <div>
              <label>Due Date: </label>
              <input
                type="date"
                name="due"
                value={formData.due}
                onChange={handleInputChange}
                className="forminput"
                required
              />
            </div>
  
            <div>
              <label>Assigned To: </label>
              <input
                type="text"
                name="assigned"
                placeholder="Assigned To"
                value={formData.assigned}
                onChange={handleInputChange}
                className="forminput"
                required
              />
            </div>
  
            <div>
              <label>Status: </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="">Select Status</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="review">Review</option>
              </select>
            </div>
            {error && <p className="error-message" style={{ color: "red", textAlign: 'center' }}>{error}</p>}
            <button className="addtask" type="submit">Add Task</button>
          </form>
        )}
        {/* Show the 'Create New Task' button after form is submitted */}
        {isFormSubmitted && (
        <button onClick={handleShowForm} className="create-task">
          + Create New Task
        </button>
        )}
      </div>
    );
  }

export default TaskForm;
