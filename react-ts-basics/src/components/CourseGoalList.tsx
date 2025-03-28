import { type ReactNode } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";

// 배열 안의 객체 타입
type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void; // function type
};

// CourseGoalList의 props는 CourseGoalListProps타입이어야 한다.
// App.tsx에서 CourseGoal을 export했고 여기서 CGoal로 받아왔다.
// ** Why ? App의 goals와 여기의 goals 타입이 일치해야 한다. 만약 export로 처리하지않았다면 속성을 추가했을 때 모든 파일에서 수정을 해줘야 하기 때문
// onDeleteGoal의 인자는 숫자여야 하고 아무것도 반환하지 않는다.
export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collectiong a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
