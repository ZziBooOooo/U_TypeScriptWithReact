import { useParams } from "react-router-dom";

import { SESSIONS } from "../dummy-sessions.ts";
import Button from "../components/UI/Button.tsx";
import { useState } from "react";
import BookSession from "../components/Sessions/BookSession.tsx";

export default function SessionPage() {
  const params = useParams<{ id: string }>();

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  const [startBookSession, setStartBookSession] = useState(false);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }
  console.log(loadedSession);
  return (
    <main id="session-page">
      <article>
        <header>
          <img src={loadedSession.image} alt={loadedSession.title} />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <p>
              {/* Todo: Add button that opens "Book Session" dialog / modal */}
              <Button onClick={() => setStartBookSession(true)}>
                Book Session
              </Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
      {startBookSession && (
        <BookSession
          setStartBookSession={setStartBookSession}
          sessionId={sessionId!}
          session={loadedSession}
        ></BookSession>
      )}
    </main>
  );
}
