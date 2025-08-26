import React from 'react';
import { Marker } from './Marker';
import { Polyline } from '../shapes';
import { MarkerLineProps } from '../../types/markers';

export const MarkerLine: React.FC<MarkerLineProps> = ({
  id,
  size = 10,
  color = '#000',
  markerStyle = {},
  ...attributes
}) => {
  const style = {
    stroke: color,
    ...markerStyle
  };
  return (
    <Marker
      id={id}
      markerWidth={size}
      markerHeight={size}
      refX={0}
      refY={size / 2}
    >
      <Polyline
        points={[
          [0, 0],
          [0, size]
        ]}
        style={style}
        {...attributes}
      />
    </Marker>
  );
};

MarkerLine.displayName = 'MarkerLine';
