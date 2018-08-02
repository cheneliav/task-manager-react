import React, { Component } from 'react';
import TaskManager from './TaskManager';
// import Task from './Task'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskManager/>
        {/* <Task/> */}
      </div>
    );
  }
}

export default App;
