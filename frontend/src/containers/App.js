import React, { Component } from 'react';
import './App.css';
import LoginForm from "./LoginForm"

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LoginForm />
        </header>
      </div>
    )
  };
}

export default App;
