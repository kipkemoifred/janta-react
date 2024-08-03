import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../actions/todoActions';

const styles = {
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem 1rem',
    margin: '0.5rem 0',
    borderRadius: '4px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  checkbox: {
    marginRight: '1rem',
  },
  text: {
    flex: '1',
    marginRight: '1rem',
    wordBreak: 'break-word',
  },
  button: {
    padding: '0.25rem 0.5rem',
    fontSize: '0.875rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#dc3545',
    color: 'white',
    cursor: 'pointer',
  },
};

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatch(updateTodo(todo._id, !todo.completed));
  };

  const removeTodo = () => {
    dispatch(deleteTodo(todo._id));
  };

  return (
    <li style={styles.listItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
        style={styles.checkbox}
      />
      <span style={styles.text}>{todo.text}</span>
      <button onClick={removeTodo} style={styles.button}>Delete</button>
    </li>
  );
};

export default TodoItem;
