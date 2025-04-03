import { createContext, useContext, useReducer, type ReactNode } from "react";

// 타이머는 개별
type Timer = {
  name: string;
  duration: number;
};

// 타이머들의 상태를 관리
type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function userTimersContext() {
  const timerCtx = useContext(TimersContext);

  if (timerCtx === null) {
    throw new Error("TimersContext is null - that should not be the case!");
  }

  return timerCtx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

type StartTimersAction = {
  type: "START_TIMER";
};
type StopTimersAction = {
  type: "STOP_TIMER";
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
  if (action.type === "START_TIMER") {
    // state.isRunning = true; <- no.
    return {
      ...state,
      isRunning: true,
    };
  }
  if (action.type === "STOP_TIMER") {
    // state.isRunning = true; <- no.
    return {
      ...state,
      isRunning: false,
    };
  }
  if (action.type === "ADD_TIMER") {
    // state.isRunning = true; <- no.
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ],
    };
  }
  return state;
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimers() {
      dispatch({ type: "START_TIMER" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMER" });
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
