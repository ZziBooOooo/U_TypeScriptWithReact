import { useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import { ModalHandle } from "../../pages/Session";

const MainHeader = () => {
  const HeaderModalRef = useRef<ModalHandle>(null);

  function handleModal() {
    HeaderModalRef.current?.open();
  }

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
            <Button onClick={handleModal}>Upcoming Sessions</Button>
          </li>
        </ul>
      </nav>
      <Modal ref={HeaderModalRef}>
        <p>session 리스트 넣을거임</p>
      </Modal>
    </div>
  );
};

export default MainHeader;
