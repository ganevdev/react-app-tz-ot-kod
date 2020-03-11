import './App.css';

import React from 'react';

import Timer from '../components/Timer';
import { TimerProvider } from '../contexts/timer-context';

function App() {
  return (
    <TimerProvider>
      <main className="App">
        <Timer />
      </main>
    </TimerProvider>
  );
}

export default App;
