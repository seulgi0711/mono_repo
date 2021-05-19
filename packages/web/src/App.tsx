import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mono/shared";

function App() {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue((prev) => !prev);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={handleClick}>Shared {value ? "True" : "False"}</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
