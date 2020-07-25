import React, { Component } from 'react';
import './App.css';
import LoginForm from "./LoginForm"

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
          <LoginForm />
        </div>
      </div>
    )
  };
}

export default App;
