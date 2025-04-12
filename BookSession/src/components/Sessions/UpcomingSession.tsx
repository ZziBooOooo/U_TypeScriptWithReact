import React, { useEffect, useRef } from "react";
import Modal from "../UI/Modal";
import { ModalHandle } from "../UI/Modal";
import Button from "../UI/Button";
import { useCustomSelector } from "../../store/hooks";
import UpcomingSessionItem from "./UpcomingSessionItem";

type UpcomingSessionProps = {
  setStartHeaderModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpcomingSession = ({ setStartHeaderModal }: UpcomingSessionProps) => {
  const booklists = useCustomSelector((state) => state.session.bookLists);
  console.log(booklists);

  function handleModal() {
    HeaderModalRef.current?.open();
  }

  function closeModal() {
    HeaderModalRef.current?.close();
    setStartHeaderModal(false);
  }

  useEffect(() => {
    handleModal();
  }, []);

  const haslists = booklists.length > 0;

  const HeaderModalRef = useRef<ModalHandle>(null);
  return (
    <Modal ref={HeaderModalRef}>
      {haslists && (
        <ul>
          {booklists.map((item) => (
            <li key={item.id}>
              <UpcomingSessionItem
                title={item.title}
                summary={item.summary}
                date={item.date}
                id={item.id}
              ></UpcomingSessionItem>
            </li>
          ))}
        </ul>
      )}
      <Button onClick={closeModal}>Close</Button>
    </Modal>
  );
};

export default UpcomingSession;
