import { type PropsWithChildren } from "react";

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
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>;
export default function CourseGoal({
  title,
  onDelete,
  id,
  children,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{id}</p>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  );
}
