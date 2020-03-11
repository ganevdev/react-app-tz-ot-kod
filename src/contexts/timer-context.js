import React, { useContext } from 'react';

const TimerStateContext = React.createContext(null);
const TimerDispatchContext = React.createContext(null);

function timerReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return { timeInterval: state.timeInterval + 1 };
    }
    case 'decrement': {
      return { timeInterval: state.timeInterval - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TimerProvider({ children }) {
  const [state, dispatch] = React.useReducer(timerReducer, {
    timeInterval: 1,
  });

  return (
    <TimerStateContext.Provider value={state}>
      <TimerDispatchContext.Provider value={dispatch}>
        {children}
      </TimerDispatchContext.Provider>
    </TimerStateContext.Provider>
  );
}

function useTimerState() {
  const context = useContext(TimerStateContext);
  return context;
}

function useTimerDispatch() {
  const context = useContext(TimerDispatchContext);
  return context;
}

export { TimerProvider, useTimerState, useTimerDispatch };
