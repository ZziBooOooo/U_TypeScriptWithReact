import { ComponentPropsWithRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithRef<"input">;

const Input = ({ id, label, ...rest }: InputProps) => {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest}></input>
    </div>
  );
};

export default Input;
