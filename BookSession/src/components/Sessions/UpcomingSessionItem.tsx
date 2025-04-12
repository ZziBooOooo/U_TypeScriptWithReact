import React from "react";
import Button from "./../UI/Button";
import { useCustomDispatch } from "../../store/hooks";
import { deleteSession } from "../../store/session-slice";

type UpcomingSessionItemProps = {
  title: string;
  summary: string;
  date: string;
  id: string;
};

const UpcomingSessionItem = ({
  title,
  summary,
  date,
  id,
}: UpcomingSessionItemProps) => {
  const dispatch = useCustomDispatch();

  return (
    <article className="upcoming-session">
      <div>
        <p>{title}</p>
        <p>{summary}</p>
        <p>{date}</p>
      </div>
      <Button textOnly onClick={() => dispatch(deleteSession({ id }))}>
        Delete
      </Button>
    </article>
  );
};

export default UpcomingSessionItem;
