import { useContext } from "react";
import Button from "./UI/Button.tsx";
import { userTimersContext } from "../store/timers-context.tsx";

export default function Header() {
  const timersCtx = userTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{timersCtx.isRunning ? "Stop" : "Start"} Timers</Button>
    </header>
  );
}
