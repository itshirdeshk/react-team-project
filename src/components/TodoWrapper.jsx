import React from 'react';
import TodoP from "./TodoP";
import TodoForm from "./TodoForm";
const TodoWrapper = () => {
  return (
      <>
      <div className="Wrapper">
      <h1>Get Things Done !</h1>
      <TodoP /> 
      <TodoForm />
      </div>
      </>
  )
}

export default TodoWrapper;
