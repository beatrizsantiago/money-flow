import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: "primary" | "secondary";
  disabled?: boolean;
  outlined?: boolean;
};

const OUTLINED_HOVER_COLOR = {
  primary: "hover:bg-primary-transparent",
  secondary: "hover:bg-secondary-transparent",
};

const DEFAULT_HOVER_COLOR = {
  primary: "hover:bg-primary-hover",
  secondary: "hover:bg-secondary-hover",
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
  const hover = outlined ? OUTLINED_HOVER_COLOR[color] : DEFAULT_HOVER_COLOR[color];

  const defaultStyle =  outlined
    ? `bg-transparent ${textColor} border ${borderColor} border-2`
    : `${bgColor} text-white`;

  return (
    <button
      disabled={disabled}
      className={`
        ${disabledStyle}
        ${disabled ? '' : defaultStyle}
        ${disabled ? '' : hover}
        py-3 px-10 rounded-lg font-semibold ${className}
      `}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
