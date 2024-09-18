import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: "primary" | "secondary" | "bluegray";
  error?: boolean;
};

const COLOR = {
  primary: "border-primary-main",
  secondary: "border-secondary-main",
  bluegray: "border-gray-bluegray",
};

const Input = ({
  color = "primary",
  error = false,
  className = "",
  ...rest
}:InputProps) => (
  <input
    className={`
      px-4 h-12 border rounded-lg text-gray-dark font-normal focus:outline-none
      ${error ? 'border-red-500' : COLOR[color]}
      ${className}
    `}
    {...rest}
  />
);

export default Input;
