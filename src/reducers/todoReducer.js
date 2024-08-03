import {
    ADD_TODO,
    GET_TODOS,
    UPDATE_TODO,
    DELETE_TODO,
    CLEAR_COMPLETED_TODOS,
  } from '../actions/todoActions';
  
  const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_TODOS:
        return { ...state, todos: action.payload };
      case ADD_TODO:
        return { ...state, todos: [...state.todos, action.payload] };
      case UPDATE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo._id === action.payload._id ? action.payload : todo
          ),
        };
      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo._id !== action.payload),
        };
      case CLEAR_COMPLETED_TODOS:
        return {
          ...state,
          todos: state.todos.filter((todo) => !todo.completed),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  