import { FormEvent, useEffect, useRef } from "react";
import Modal from "../UI/Modal.tsx";
import { ModalHandle } from "../UI/Modal.tsx";
import Button from "../UI/Button.tsx";
import Input from "../UI/Input.tsx";

type setStartBookSessionProps = {
  setStartBookSession: React.Dispatch<React.SetStateAction<boolean>>;
};

type handleFormType = (e: HTMLElement) => void;

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

  function handleForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <Modal ref={FormModalRef}>
      <form onSubmit={handleForm}>
        <Input id="0" label="name" type="text" name="name"></Input>
        <Input id="1" label="email" type="email" name="email"></Input>
        <p className="actions">
          <Button textOnly={true} onClick={closeModal}>
            Cancel
          </Button>
          <Button>Confirm</Button>
        </p>
      </form>
    </Modal>
  );
};

export default BookSession;
