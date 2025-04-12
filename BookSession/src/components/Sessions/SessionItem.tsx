import React from "react";
import { sessionType } from "./SessionsList";
import Button from "../UI/Button";

const SessionItem = ({ image, title, summary, id }: sessionType) => {
  return (
    <div className="session-item">
      <img src={image} alt={title} />
      <div className="session-data">
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
        <p className="actions">
          <Button textOnly={true} to={`/sessions/${id}`}>
            More
          </Button>
        </p>
      </div>
    </div>
  );
};

export default SessionItem;
