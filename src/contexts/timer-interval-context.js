import React, { useContext } from 'react';

const TimerIntervalStateContext = React.createContext(null);
const TimerIntervalDispatchContext = React.createContext(null);

function timerIntervalReducer(state, action) {
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

function TimerIntervalProvider({ children }) {
  const [state, dispatch] = React.useReducer(timerIntervalReducer, {
    timeInterval: 1,
  });

  return (
    <TimerIntervalStateContext.Provider value={state}>
      <TimerIntervalDispatchContext.Provider value={dispatch}>
        {children}
      </TimerIntervalDispatchContext.Provider>
    </TimerIntervalStateContext.Provider>
  );
}

function useTimerIntervalState() {
  const context = useContext(TimerIntervalStateContext);
  return context;
}

function useTimerIntervalDispatch() {
  const context = useContext(TimerIntervalDispatchContext);
  return context;
}

export {
  TimerIntervalProvider,
  useTimerIntervalState,
  useTimerIntervalDispatch,
};
