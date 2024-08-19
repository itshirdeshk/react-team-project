import React from 'react'

const TodoForm = () => {
  return (
    <div> 
      <form className="TodoForm">
    <input type="text"  className="todo-input" placeholder='What is the task today?' />
    <button type="submit" className='todo-btn'>Add Task</button>
    <button className='todo-btn'>Clear</button>
    <button className='todo-btn'>Update</button>
  </form>
    </div>
  )
}

export default TodoForm;
