import "./styles.css";
import React, { useState } from 'react';

window.localStorage.setItem('count', 50);

export default function App() {
  // heavy IO operation
  const initialState = Number(window.localStorage.getItem('count'))
  console.log({ initialState })

  const [count, setCount] = useState(initialState);
  
  // const initialState = () => Number(window.localStorage.getItem('count'))
  const incrementCount = () => setCount(count => count + 1);
  const decrementCount = () => setCount(count => count - 1);

  const resetCount = () => setCount(0);

  const countColor = count > 0 ? '#FFEA00' : count < 0 ? '#231f20' : '#fff';
  
  return (
    <>
      <div className="counter">
        <button
          className="increase arrow btn"
          onClick={incrementCount}
        >
          <i className="fas fa-chevron-up"></i>
        </button>

        <span className="value" style={{ color: countColor }}>{count}</span>

        <button
          className="decrease arrow btn"
          onClick={decrementCount}
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>

      <button className="reset btn" onClick={resetCount}>Reset</button>
    </>
  );
}
