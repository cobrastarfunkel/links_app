import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState(0);

  useEffect(() => {
    fetch('/hello').then(res => res.json()).then(data => {
      setMessage(data.hello);
      console.log("Data: " + data.hello);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
