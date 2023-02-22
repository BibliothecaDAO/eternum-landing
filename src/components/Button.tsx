import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonProps = {
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: FC<ButtonProps> = ({ href, ...rest }) => {
  if (href) {
    return (
      <a className="p-3 font-normal tracking-wide text-white normal-case border-0 rounded-lg shadow-lg backdrop-brightness-125 bg-black/50" href={href} {...rest}>
        {rest.children}
      </a>
    );
  }
  return (
    <button
      className="p-3 font-normal tracking-wide text-white normal-case border-0 rounded-lg shadow-lg backdrop-brightness-125 bg-black/90"
      {...rest}
    >
      {rest.children}
    </button>
  );
};

export default Button;
