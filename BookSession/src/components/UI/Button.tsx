import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

// 공통으로 사용하는 props
type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};

// button  props 타입
type ButtonProps = {
  to?: never; // 'button'에서는 'to'를 사용하지 않음
} & BaseProps &
  ComponentPropsWithoutRef<"button">;

// Link  props 타입
type ButtonLinkProps = {
  to: string;
} & BaseProps;

type ButtonComponentProps = ButtonProps | ButtonLinkProps;

function isRouterLink(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "to" in props;
}

const Button = (props: ButtonComponentProps) => {
  // button일 때 처리
  if (isRouterLink(props)) {
    const { to, children, textOnly, ...otherProps } = props;
    return (
      <Link
        to={to}
        className={`button ${textOnly ? "button--text-only" : ""}`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }
  const { children, textOnly, ...otherProps } = props;
  return (
    <button
      className={`button ${textOnly ? "button--text-only" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
