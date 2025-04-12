import React, {
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
} from "react";
import Button from "./Button";
import { createPortal } from "react-dom";

export type ModalHandle = {
  open: () => void;
  close: () => void;
};

type ModalProps = {
  children: ReactNode;
};

const Modal = forwardRef<ModalHandle, ModalProps>(({ children }, ref) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        modalRef.current?.showModal();
      },

      close() {
        modalRef.current?.close();
      },
    };
  });

  return createPortal(
    <dialog className="modal" ref={modalRef}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
