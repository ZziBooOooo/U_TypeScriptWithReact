import { userTimersContext } from "../store/timers-context";
import Timer from "./Timer";

export default function Timers() {
  const { timers } = userTimersContext();
  return (
    <ul>
      {timers.map((timer) => (
        <li key={timer.name}>
          <Timer {...timer}> </Timer>
        </li>
      ))}
    </ul>
  );
}
