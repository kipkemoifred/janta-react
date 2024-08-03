import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, clearCompletedTodos } from '../actions/todoActions';
import TodoItem from './TodoItem';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const TodoList = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    dispatch(getTodos('all'));
  }, [dispatch]);

  const clearCompleted = () => {
    dispatch(clearCompletedTodos());
  };

  return (
    <div>
        <button onClick={() =>  navigate('/addTodo') }>Add Todo</button>
     
      <button onClick={() => dispatch(getTodos('all'))}>All</button>
      <button onClick={() => dispatch(getTodos('active'))}>Active</button>
      <button onClick={() => dispatch(getTodos('complete'))}>Completed</button>
      <button onClick={clearCompleted}>Clear Completed</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
