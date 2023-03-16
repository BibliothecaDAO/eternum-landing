import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonProps = {
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: FC<ButtonProps> = ({ href, ...rest }) => {
  if (href) {
    return (
      <a
        className="px-4 py-2 text-sm font-normal tracking-wide text-white uppercase bg-black rounded-lg shadow-lg backdrop-brightness-125 hover:bg-black/50"
        href={href}
        {...rest}
      >
        {rest.children}
      </a>
    );
  }
  return (
    <button
      className="px-4 py-2 text-sm tracking-wide text-white uppercase bg-black rounded-lg shadow-lg backdrop-brightness-125 hover:bg-black/50"
      {...rest}
    >
      {rest.children}
    </button>
  );
};

export default Button;
