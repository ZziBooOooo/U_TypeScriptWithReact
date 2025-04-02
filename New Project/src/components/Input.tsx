import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, inputRef) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} ref={inputRef} />
      </p>
    );
  }
);

export default Input;
