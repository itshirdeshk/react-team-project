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

export default TodoForm;



