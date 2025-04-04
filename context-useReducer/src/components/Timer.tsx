import Container from "./UI/Container.tsx";
import { Timer as TimerProps } from "../store/timers-context.tsx";
import { useEffect, useState } from "react";

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemaningTime] = useState(duration * 1000);

  useEffect(() => {
    setInterval(function () {
      setRemaningTime((prevTime) => prevTime - 50);
    }, 50);
  }, []);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{}</p>
    </Container>
  );
}
