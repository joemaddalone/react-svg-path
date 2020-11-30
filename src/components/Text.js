import React from 'react';

export const Text = ({ x, y, sx, sy, children, ...attributes }) => {
  const allowedAttributes = { ...attributes };
  delete allowedAttributes.sx;
  delete allowedAttributes.sy;
  delete allowedAttributes.cx;
  delete allowedAttributes.cy;
  return (
    <text x={sx || x} y={sy || y} {...allowedAttributes}>
      {children}
    </text>
  );
};
