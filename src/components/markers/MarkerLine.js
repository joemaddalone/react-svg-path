import React from 'react';
import { Marker } from './Marker';
import { Line } from '../Line';

export const MarkerLine = ({
  id,
  size = 40,
  color = '#000',
  ...attributes
}) => {
  const settings = {
    stroke: color
  };
  return (
    <Marker
      id={id}
      markerWidth={attributes.strokeWidth || 1}
      markerHeight={size / 2}
      refX={0}
      refY={size / 4}
    >
      <Line
        sx={0}
        sy={0}
        ex={0}
        ey={size}
        relative
        {...settings}
        {...attributes}
      />
    </Marker>
  );
};
