import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { FontSize } from "../types";

type ButtonType = {
  text: string;
  className?: string;
  size?: FontSize;
};
const Button: FC<ButtonType> = ({ text, className, size }) => {
  return (
    <a
      href="#_"
      className={twMerge(
        "relative inline-flex items-center px-12 pl-13 py-2 overflow-hidden  font-medium text-white border-2 border-white rounded-full hover:text-black group hover:bg-black",
        className
      )}
    >
      <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span
        className={twMerge(
          "uppercase relative text-sm",
          size && `text-${size}`
        )}
      >
        {text}
      </span>
    </a>
  );
};

export default Button;
