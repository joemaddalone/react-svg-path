import React from 'react';
import { Marker } from './Marker';
import { Polyline } from '../BasicShapes';

export const MarkerLine = ({
  id,
  size = 10,
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
      markerHeight={size}
      refX={0}
      refY={size / 2}
    >
      <Polyline
        points={[
          [0, 0],
          [0, size]
        ]}
        {...settings}
        {...attributes}
      />
    </Marker>
  );
};

MarkerLine.displayName = 'MarkerLine';
