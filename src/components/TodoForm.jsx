import { useState } from 'react';
import React from 'react'


const TodoForm = () => {
  let [todos,setTodos] = useState(["assignment"]);
  let [newTodo, setNewTodo] = useState("");
  
  let addNewTask = () => {
   setTodos([...todos, newTodo]);
   setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
    };

  return (
    <div> 
      <form className="TodoForm">
    <input type="text"  className="todo-input" placeholder='What is the task today?' value={newTodo} onChange={updateTodoValue} />
    <button type="submit" className='todo-btn' onClick={addNewTask}>Add Task</button>
    <button className='todo-btn'>Clear</button>
    <button className='todo-btn'>Update</button>
  </form>
  <hr></hr>
  <h4>Tasks Todo</h4>
  <ul>
    { todos.map((todo) =>(
   <li> {todo} </li>
    ))
      
    }
  </ul>
    </div>
  )
}

export default TodoForm;
