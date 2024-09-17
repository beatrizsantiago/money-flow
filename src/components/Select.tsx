import React, { useEffect, useRef, useState } from "react";

type Option = {
  value: string,
  label: string,
};

export interface SelectProps {
  placeholder: string;
  options: Option[];
  selected: Option | null;
  onChange: (value: Option) => void;
};

const Select = ({
  placeholder, options, selected, onChange,
}:SelectProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block w-64">
      <div 
        className="flex items-center h-12 appearance-none w-full bg-white border border-secondary-main text-gray-dark py-2 px-4 rounded-lg leading-tight focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected?.label || placeholder}
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
          <svg className="fill-current text-secondary-main h-5 w-5" viewBox="0 0 20 20">
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-secondary-main rounded-lg shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              className={`flex items-center h-12 px-4 py-2 text-gray-dark cursor-pointer hover:bg-secondary-light hover:text-gray-dark ${selected?.value === option.value ? 'bg-secondary-light text-gray-dark font-bold' : ''}`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;