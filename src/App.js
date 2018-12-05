import React, { Component } from 'react';
import './App.css';
import './LoginControl'
import LoginControl from './LoginControl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <LoginControl />       
         </header>

      </div>
    );
  }
}

export default App;
