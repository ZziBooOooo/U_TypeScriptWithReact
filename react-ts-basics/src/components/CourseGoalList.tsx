import CourseGoal from "./CourseGoal"
import { type CourseGoal as CGoal } from "../App.tsx"

// 배열 안의 객체 타입 
type CourseGoalListProps = {
    goals: CGoal [] ;
    onDeleteGoal: (id: number) => void; // function type
};

export default function CourseGoalList ({goals, Goal}:CourseGoalListProps) {
  return (
    <ul>
        {goals.map((goal)=>(
            <li key={goal.id}>
              <CourseGoal  title={goal.title} onDelete={onDeleteGoal}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          ))}
      </ul>
  )
}

