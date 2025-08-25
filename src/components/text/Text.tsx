import React from 'react';
import cleanAttributes from '../../utils/cleanAttributes';
import { TextProps } from '../../types/text';

export const Text: React.FC<TextProps> = (props) => {
  const { x, y, sx, sy, children, ...attributes } = props;
  const allowedAttributes = cleanAttributes(attributes);
  return (
    <text x={sx || x} y={sy || y} {...allowedAttributes}>
      {children}
    </text>
  );
};