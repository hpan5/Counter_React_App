import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [counterValue, setCounterValue] = useState(42);

  return (
    <div className="App">
      <h2 className="counter">{counterValue}</h2>
      <button className="counter-button" onClick={() => setCounterValue(counterValue + 1)}>
        Click
      </button>
    </div>
  )
}

export default App;
