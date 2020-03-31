import React, { useState } from 'react';
import Routes from './router';
import './global.css'

function App() {
  let [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter++);
  }

  return (
    <div>
      <Routes></Routes>
    </div>
  );
}

export default App;
