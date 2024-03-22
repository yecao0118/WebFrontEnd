import { useState } from 'react';
import './App.css';
import Reorder from './Reorder';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(prevCount => prevCount + 1);
  const decreaseCount = () => setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
  const onReorder = () => setCount(5);

  return (
    <div className='App'>
      <div className='inventory-controls'>
        <button onClick={decreaseCount} disabled={!count}>-</button>
        <span className='inventory-count'>{count}</span>
        <button onClick={increaseCount}>+</button>
        {count === 0 && <Reorder onReorder={onReorder} />}
      </div>
    </div>
  );
}

export default App
