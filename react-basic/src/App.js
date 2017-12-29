import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.state.comment}</h1>
        <A />
        <B />
      </div>
    );
  }
}

export default App;
