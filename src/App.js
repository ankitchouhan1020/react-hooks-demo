import "./styles.css";
import React, { useEffect, useState, useRef} from 'react';

// Problem Statement
// We need the last count value.

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [ value]);

  return ref.current;
}


const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const prevCount = usePrevious(count);

  console.log({ prevCount });
  
  const incrementCount = () => setCount(count => count + 1);
  const decrementCount = () => setCount(count => count - 1);

  const resetCount = () => setCount(0);

  return { count, incrementCount, decrementCount, resetCount };
}

export default function App() {
  const { count, incrementCount, decrementCount, resetCount } = useCounter();

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
