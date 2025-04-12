import { useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import { useState } from "react";
import UpcomingSession from "../Sessions/UpcomingSession";

const MainHeader = () => {
  const [startHeaderModal, setStartHeaderModal] = useState<boolean>(false);

  return (
    <div id="main-header">
      <h1>ReactMentoring</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Our Mission
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sessions"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Browse Sessions
            </NavLink>
          </li>
          <li>
            <Button onClick={() => setStartHeaderModal(true)}>
              Upcoming Sessions
            </Button>
          </li>
        </ul>
      </nav>
      {startHeaderModal && (
        <UpcomingSession
          setStartHeaderModal={setStartHeaderModal}
        ></UpcomingSession>
      )}
    </div>
  );
};

export default MainHeader;
