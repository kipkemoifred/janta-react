import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, clearCompletedTodos } from '../actions/todoActions';
import TodoItem from './TodoItem';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: '0',
    width: '100%',
    maxWidth: '400px',
  },
};


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
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
      
      <button style={styles.button}  onClick={() =>  navigate('/addTodo') }>Add Todo</button>
      <button style={styles.button}  onClick={() => dispatch(getTodos('all'))}>All</button>
      <button style={styles.button}  onClick={() => dispatch(getTodos('active'))}>Active</button>
      <button style={styles.button} onClick={() => dispatch(getTodos('complete'))}>Completed</button>
      <button style={styles.button} onClick={clearCompleted}>Clear Completed</button>
      </div>
      <ul style={styles.list}>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
