import React, { useEffect, useState } from 'react';

import { useTimerIntervalState } from '../contexts/timer-interval-context';
import Interval from './Interval';

function Timer() {
  const { timeInterval } = useTimerIntervalState();
  const [time, setTime] = useState(0);
  const [startOrNot, setStartOrNot] = useState(false);

  useEffect(() => {
    let interval = null;
    if (startOrNot) {
      interval = setInterval(() => {
        setTime((time) => time + timeInterval);
      }, timeInterval * 1000);
    } else clearInterval(interval);
    return () => clearInterval(interval);
  }, [startOrNot, time, timeInterval]);

  function stopTime() {
    setTime(0);
    setStartOrNot(false);
  }

  return (
    <div>
      <Interval />
      <div style={{ margin: '10px' }}>Секундомер: {time} сек.</div>
      <div style={{ margin: '10px' }}>
        <button onClick={() => setStartOrNot(true)}>Старт</button>
        <button onClick={stopTime}>Стоп</button>
      </div>
    </div>
  );
}

export default Timer;
