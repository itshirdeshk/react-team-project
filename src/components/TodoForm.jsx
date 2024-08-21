import React, { useState } from 'react';

const TodoForm = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [updatedTask, setUpdatedTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleUpdateClick = (index) => {
    setEditIndex(index);
    setUpdatedTask(tasks[index]);
  };

  const handleUpdateChange = (e) => {
    setUpdatedTask(e.target.value);
  };

  const handleUpdateSubmit = (index) => {
    if (updatedTask.trim()) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask.trim();
      setTasks(updatedTasks);
      setEditIndex(null);
      setUpdatedTask('');
    }
  };

  const handleCancelUpdate = () => {
    setEditIndex(null);
    setUpdatedTask('');
  };

  const handleDelete = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="What is the task today?"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
      <hr />
      <h4>Tasks Todo</h4>
      
      {tasks.length === 0 ? <div>No tasks added yet...</div> : tasks.map((task, index) => (
        <div key={index} className="flex" style={{marginBottom: "10px"}}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                className="todo-input text"
                value={updatedTask}
                onChange={handleUpdateChange}
              />
              <div>
                <button
                  type="button"
                  className="todo-btn"
                  onClick={() => handleUpdateSubmit(index)}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="todo-btn cancel-btn"
                  onClick={handleCancelUpdate}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <span className='text'>{task}</span>
              <div>
                <button
                  type="button"
                  className="todo-btn"
                  onClick={() => handleUpdateClick(index)}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="todo-btn delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoForm;
