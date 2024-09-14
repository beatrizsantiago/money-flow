import React from 'react';

const COLORS = {
  primary: [
    {
      name: 'main',
      value: '#004D61',
      class: 'bg-primary-main',
    }
  ],
  secondary: [
    {
      name: 'main',
      value: '#47A138',
      class: 'bg-secondary-main',
    },
    {
      name: 'light',
      value: '#E4EDE3',
      class: 'bg-secondary-light',
    }
  ],
  gray: [
    {
      name: 'extra light',
      value: '#F8F8F8',
      class: 'bg-gray-xlight',
    },
    {
      name: 'light',
      value: '#CCCCCC',
      class: 'bg-gray-light',
    },
    {
      name: 'medium',
      value: '#CBCBCB',
      class: 'bg-gray-medium',
    },
    {
      name: 'dark',
      value: '#444444',
      class: 'bg-gray-dark',
    },
    {
      name: 'blue gray',
      value: '#DEE9EA',
      class: 'bg-gray-bluegray',
    }
  ],
};

export const Colors = () => (
  <div>
    {Object.keys(COLORS).map((item) => (
      <div key={item} className="mb-5">
        <b>{item}</b>
        <div className="flex">
          {COLORS[item].map((color) => (
            <div
              key={color.name}
              style={{ backgroundColor: color.value, }}
              className={`rounded-2xl p-4 m-2 w-[180px] text-center ${color.class}`}
            >
              <span className="text-lg">{color.name}</span>
              <br />
              <span>{color.value}</span>
              <br />
              <span className="text-sm">{color.class}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);