import React from 'react';

import {
  useTimerIntervalDispatch,
  useTimerIntervalState,
} from '../contexts/timer-interval-context';

function Interval() {
  const { timeInterval } = useTimerIntervalState();
  const dispatch = useTimerIntervalDispatch();
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
