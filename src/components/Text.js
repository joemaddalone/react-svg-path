import React from 'react';
import cleanAttributes from '../utils/cleanAttributes';

export const Text = ({ x, y, sx, sy, children, ...attributes }) => {
  const allowedAttributes = cleanAttributes(attributes);
  return (
    <text x={sx || x} y={sy || y} {...allowedAttributes}>
      {children}
    </text>
  );
};
