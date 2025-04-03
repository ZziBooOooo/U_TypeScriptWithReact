import { createContext, useContext, type ReactNode } from "react";

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

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      // ...
    },
    startTimers() {
      // ...
    },
    stopTimers() {
      // ...
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
