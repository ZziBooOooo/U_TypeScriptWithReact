import { useState } from "react";

import CourseGoal from "./components/CourseGoal";
import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  // useState는 제너릭타입 - goals는 배열이고 그 안의 각 요소가 CourseGoal 타입
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  // 왜 타입을 지정하지 않았나?
  // setGoals는 goals의 상태를 업데이트 하는 함수
  // TS가 코드 흐름을 보고 자동으로 타입추론을 함
  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Number((Math.random() * 10).toFixed(2)),
        title: "Learn React + TS ",
        description: "Learn it in depth!!",
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Cours Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
