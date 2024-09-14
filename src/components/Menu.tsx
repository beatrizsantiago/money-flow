import React from "react";

export interface MenuProps {
  items: {
    title: string;
    onClick: () => void;
  }[];
  activeIndex: number;
  inline?: boolean;
};

const Menu = ({
  items, activeIndex, inline = false
}:MenuProps) => (
  <nav className={inline ? 'flex' : ''}>
    {items.map((item, index) => (
      <div key={index} className="flex flex-col items-center px-4">
        <button
          onClick={item.onClick}
          className={`h-12 min-w-28 ${activeIndex === index ? 'text-secondary-main font-bold' : 'text-black font-normal'}`}
        >
          {item.title}
        </button>
        {(index < (items.length - 1) || inline) && (
          <div className={`w-28 h-px ${activeIndex === index ? 'bg-secondary-main' : 'bg-black'}`} />
        )}
      </div>
    ))}
  </nav>
);

export default Menu;
