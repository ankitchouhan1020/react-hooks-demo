import "./styles.css";
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  // console.log('Hey, I\'m re-rendering with ', count);
 
  const incrementCount = () => setCount(count => count + 1);
  const decrementCount = () => setCount(count => count - 1);

  // bailout
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
