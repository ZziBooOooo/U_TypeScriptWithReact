import SessionItem from "./SessionItem";

export type sessionType = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};
type SessionsListProps = {
  sessions: sessionType[];
};
const SessionsList = ({ sessions }: SessionsListProps) => {
  return (
    <ul id="sessions-list">
      {sessions.map((session) => (
        <li key={session.id}>
          <SessionItem
            id={session.id}
            title={session.title}
            summary={session.summary}
            description={session.description}
            duration={session.duration}
            date={session.date}
            image={session.image}
          />
        </li>
      ))}
    </ul>
  );
};

export default SessionsList;
