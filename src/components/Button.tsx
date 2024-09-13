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

  const defaultStyle =  outlined
    ? `bg-transparent text-${COLOR[color]} border border-${COLOR[color]} border-2`
    : `bg-${COLOR[color]} text-white`;

  return (
    <button
      disabled={disabled}
      className={`
        ${disabledStyle}
        ${disabled ? '' : defaultStyle}
        py-3 px-10 rounded-lg font-semibold hover:bg-transparent hover:text-gray-dark hover:border-none ${className}
      `}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
