import React, { useEffect, useRef } from "react";
import Modal from "../UI/Modal";
import { ModalHandle } from "../UI/Modal";
import Button from "../UI/Button";

type UpcomingSessionProps = {
  setStartHeaderModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpcomingSession = ({ setStartHeaderModal }: UpcomingSessionProps) => {
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

  const HeaderModalRef = useRef<ModalHandle>(null);
  return (
    <Modal ref={HeaderModalRef}>
      <p>session 리스트 넣을거임</p>
      <Button onClick={closeModal}>Close</Button>
    </Modal>
  );
};

export default UpcomingSession;
