import {
  type FormEvent,
  ComponentPropsWithoutRef,
  useImperativeHandle,
  useRef,
  forwardRef,
} from "react";

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

// forwardRef의 제네릭 첫번째 자리에는
// ref가 참조할 객체가 clear 메서드를 가진 객체임을 알려줌
// 즉, ref는 clear메서드를 가진 객체를 참조하고 있다는 것
const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...otherProps }, ref) => {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log("CLEARING!!");
          form.current?.reset();
        },
      };
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);
      onSave(data);
    }

    return (
      <form onSubmit={handleSubmit} {...otherProps} ref={form}>
        {children}
      </form>
    );
  }
);

export default Form;
