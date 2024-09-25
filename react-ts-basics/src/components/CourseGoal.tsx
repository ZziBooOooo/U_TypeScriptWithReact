import {type PropsWithChildren } from "react";

/* type CourseGoalProps = {
  title: string;
  description: string;
}; */

/* interface CourseGoalProps {
  title: string;
  description: string;
}

export default function CourseGoal({ title, description }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>DELETE</button>
    </article>
  );
} */

/* interface CourseGoalProps {
  title: string;
  children:ReactNode
} */

type CourseGoalProps = PropsWithChildren<{
  title:string;
  onDeleteGoal: (id: number) => void;
  }>;
export default function CourseGoal({ title, onDeleteGoal, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      {/* 클릭함수에 id가 없어서 현재 에러 표시하는 중 같음..? */}
      <button onClick={onDeleteGoal}>DELETE</button>
    </article>
  );
}
