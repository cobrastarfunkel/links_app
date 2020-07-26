import React, { Component } from 'react';
import './App.css';
import LoginForm from "./LoginForm"

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="login-header">
          <h1>Links App Login</h1>
        </header>
        <LoginForm />
      </div>
    )
  };
}

export default App;
