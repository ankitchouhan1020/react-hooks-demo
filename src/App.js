import "./styles.css";
import React, { useMemo, useReducer, useState } from 'react';

// action doesn't necessarily needs to be an object.
function reducer(prevState, actionType) {
  switch (actionType) {
    case 'INCREMENT':
      return prevState + 1;

    case 'DECREMENT':
      return prevState - 1;

    case 'RESET':
      return 0;

    default:
      // bailout
      return prevState;
  }
}

const useCounter = (initialValue = 0) => {
  const [count, dispatch] = useReducer(reducer, initialValue);

  const handlers = useMemo(() => ({
    incrementCount: () => dispatch('INCREMENT'),
    decrementCount: () => dispatch('DECREMENT'),
    resetCount: () => dispatch('RESET')
  }), [dispatch])


  return { count, ...handlers };
}

export default function App() {
  const { count, incrementCount, decrementCount, resetCount } = useCounter();

  const countColor = count > 0 ? '#FFEA00' : count < 0 ? '#231f20' : '#fff';

  return (
    <>
      <div class="counter">
        <button
          class="increase arrow btn"
          onClick={incrementCount}
        >
          <i class="fas fa-chevron-up"></i>
        </button>

        <span class="value" style={{ color: countColor }}>{count}</span>

        <button
          class="decrease arrow btn"
          onClick={decrementCount}
        >
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>

      <button class="reset btn" onClick={resetCount}>Reset</button>
    </>
  );
}
