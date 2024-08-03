import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>Todo List</h1>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute component={AddTodo} />} />
            <Route path="/todos" element={<PrivateRoute component={TodoList} />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
