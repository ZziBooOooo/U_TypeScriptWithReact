import CourseGoal from "./components/CourseGoal";

export default function App() {
  return (
    <main>
      {/* CourseGoal에서 title, deescription 2개만 타입 지정을 해놨으므로 여기서
      다른 프롭을 넘기려고 하면 오류가 발생한다. */}
      <CourseGoal  title="Learn React + TS">
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}
