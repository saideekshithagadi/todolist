// src/App.js
import React from 'react';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';
import './App.css'
const App = () => {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
