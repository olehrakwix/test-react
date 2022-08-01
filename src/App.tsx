import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import debounce from "debounce";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = debounce(() => setCounter(counter + 1), 3000);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>Counter: {counter}</div>
        <div>
          <button onClick={handleClick}>Click</button>
        </div>
      </header>
    </div>
  );
}

export default App;
