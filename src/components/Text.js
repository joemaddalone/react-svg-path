import React from 'react';

export const Text = ({ x, y, sx, sy, children, ...attributes }) => {
  return (
    <text x={sx || x} y={sy || y} {...attributes}>
      {children}
    </text>
  );
};
