import { useEffect, useRef } from "react";
import Modal from "../UI/Modal.tsx";
import { ModalHandle } from "../UI/Modal.tsx";
import Button from "../UI/Button.tsx";

type setStartBookSessionProps = {
  setStartBookSession: React.Dispatch<React.SetStateAction<boolean>>;
};

const BookSession = ({ setStartBookSession }: setStartBookSessionProps) => {
  const FormModalRef = useRef<ModalHandle>(null);

  useEffect(() => {
    handleModal();
  }, []);

  function handleModal() {
    // 초기값에서 null로 설정했음
    // 그래서 current가 never인데 open 속성을 찾을 수 없다는 오류 발생
    //  useRef에 제너릭 타입을 줌
    FormModalRef.current?.open();
  }

  function closeModal() {
    FormModalRef.current?.close();
    setStartBookSession(false);
  }

  return (
    <Modal ref={FormModalRef}>
      <form>
        <input></input>
      </form>
      <Button textOnly={true} onClick={closeModal}>
        Close
      </Button>
      <Button>Confirm</Button>
    </Modal>
  );
};

export default BookSession;
