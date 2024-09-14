import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: "primary" | "secondary";
  disabled?: boolean;
  outlined?: boolean;
};

const COLOR = {
  primary: "primary-main",
  secondary: "secondary-main",
};

const Button = ({
  text,
  color = "primary",
  disabled = false,
  outlined = false,
  className = "",
  ...rest
}:ButtonProps) => {
  const disabledStyle = disabled ? 'bg-transparent text-gray-dark border-none' : '';

  const textColor = color === "primary" ? "text-primary-main" : "text-secondary-main";
  const borderColor = color === "primary" ? "border-primary-main" : "border-secondary-main";
  const bgColor = color === "primary" ? "bg-primary-main" : "bg-secondary-main";
  const hover = disabled ? '' : 'hover:bg-black hover:text-white hover:border-none';

  const defaultStyle =  outlined
    ? `bg-transparent ${textColor} border ${borderColor} border-2`
    : `${bgColor} text-white`;

  return (
    <button
      disabled={disabled}
      className={`
        ${disabledStyle}
        ${disabled ? '' : defaultStyle}
        ${hover}
        py-3 px-10 rounded-lg font-semibold ${className}
      `}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
