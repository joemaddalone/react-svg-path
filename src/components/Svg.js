import React from 'react';

export const Svg = ({ children, width, height, ...attributes }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      {...attributes}
    >
      {children}
    </svg>
  );
};
