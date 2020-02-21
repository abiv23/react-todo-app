import React, { Component } from 'react';

import ToDo from './components/todo/todo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ToDo buttonText={'submit'}/>
      </div>
    )
  }
}

export default App;
