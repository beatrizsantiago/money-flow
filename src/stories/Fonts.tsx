import React from 'react';

export interface FontsProps {
  size: 'xl' | 'lg' | 'md' | 'sm';
};

const SIZE_LABEL = {
  xl: 'Extra-Large - 1.568rem',
  lg: 'Large - 1.25rem',
  md: 'Medium - 1rem',
  sm: 'Small - 0.812rem',
};

const CUSTOM_CLASS_NAME = {
  xl: 'text-xl',
  lg: 'text-lg',
  md: 'text-md',
  sm: 'text-sm',
};

export const Fonts = ({ size }:FontsProps) => (
  <div>
    <p className={`text-center text-${size}`}>{SIZE_LABEL[size]}</p>
    <p className="text-center text-gray-main">({CUSTOM_CLASS_NAME[size]})</p>
  </div>
);
