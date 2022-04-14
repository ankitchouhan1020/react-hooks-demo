import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  
  const incrementCount = () => setCount(count => count + 1);
  const decrementCount = () => setCount(count => count - 1);

  const resetCount = () => setCount(0);

  return { count, incrementCount, decrementCount, resetCount };
}
