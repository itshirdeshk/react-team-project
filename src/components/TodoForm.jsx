import React, { useState } from 'react';

const TodoForm = () => {
  const [tasks, setTasks] = useState(["assignment"]);
  const [newTask, setNewTask] = useState("");
  
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div> 
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input 
          type="text"  
          className="todo-input" 
          placeholder='What is the task today?' 
          value={newTask} 
          onChange={handleInputChange} 
        />
        <button type="submit" className='todo-btn'>Add Task</button>
        <button type="button" className='todo-btn'>Clear</button>
        <button type="button" className='todo-btn'>Update</button>
      </form>
      <hr />
      <h4>Tasks Todo</h4>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;