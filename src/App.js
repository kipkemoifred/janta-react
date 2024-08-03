import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import store from './store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const styles = {
  appContainer: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '2rem',
  },
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App" style={styles.appContainer}>
          <h1 style={styles.heading}>Todo List</h1>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addTodo" element={<PrivateRoute component={AddTodo} />} />
            <Route path="/todos" element={<PrivateRoute component={TodoList} />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
