import React from 'react';
import { Marker } from './Marker';
import { Polyline } from '../Polyline';

export const MarkerSquare = ({
  id,
  size = 10,
  color = '#000',
  ...attributes
}) => {
  return (
    <Marker
      id={id}
      markerWidth={size * 2}
      markerHeight={size * 2}
      refX={size / 2}
      refY={size / 2}
    >
      <Polyline
        points={[
          [0, 0],
          [size, 0],
          [size, size],
          [0, size]
        ]}
        fill={color}
        {...attributes}
      />
    </Marker>
  );
};
