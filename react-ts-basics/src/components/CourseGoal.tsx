import {type PropsWithChildren, type ReactNode } from "react";

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

type CourseGoalProps = PropsWithChildren<{title:string}>

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button>DELETE</button>
    </article>
  );
}
