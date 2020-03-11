import './App.css';

import React from 'react';

import Timer from '../components/Timer';
import { TimerIntervalProvider } from '../contexts/timer-interval-context';

function App() {
  return (
    <TimerIntervalProvider>
      <main className="App">
        <Timer />
      </main>
    </TimerIntervalProvider>
  );
}

export default App;
