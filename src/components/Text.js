import React from 'react';

export const Text = ({ x, y, sx, sy, children, ...rest }) => {
  return (
    <text x={sx || x} y={sy || y} {...rest}>
      {children}
    </text>
  );
};
