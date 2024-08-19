import React, { useState } from 'react';

const TodoForm = () => {
  const [task, setTask] = useState(''); 
  const [tasks, setTasks] = useState([]); 

  // Handle input change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (task.trim()) { 
      setTasks([...tasks, task]); // Add the task to the tasks ki list
      setTask(''); // clear karta hai input field ko
    }
  };

  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="What is the task today?"
          value={task}
          onChange={handleInputChange}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
        <button type="button" className="todo-btn">
          Clear
        </button>
        <button type="button" className="todo-btn">
          Update
        </button>
      </form>

      {/* Display the list of tasks */}
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;


