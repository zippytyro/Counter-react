// jshint esversion: 6
import React, { useState } from "react";

function App() {
  // count stores the initial value, while setCount function increments it.
  let [count, setCount] = useState(0);

  function increase() {
    setCount(++count);
  }

  function decrease() {
    setCount(--count);
  }
  function zero(){
    setCount(0);
  }
  return (
    <div className="container">
      <h1> {count} </h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={zero}>0</button>
    </div>
  );
}

export default App;
