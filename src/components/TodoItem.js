import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../actions/todoActions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatch(updateTodo(todo._id, !todo.completed));
  };

  const removeTodo = () => {
    dispatch(deleteTodo(todo._id));
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      {todo.text}
      <button onClick={removeTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
