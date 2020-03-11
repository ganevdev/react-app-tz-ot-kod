import React from 'react';

import { useTimerDispatch, useTimerState } from '../contexts/timer-context';

function Interval() {
  const { timeInterval } = useTimerState();
  const dispatch = useTimerDispatch();
  return (
    <div style={{ margin: '10px' }}>
      <span>Интервал обновления секундомера: {timeInterval} сек.</span>
      <span>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </span>
    </div>
  );
}

export default Interval;
