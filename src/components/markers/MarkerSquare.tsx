import React from 'react';
import { Marker } from './Marker';
import { Polyline } from '../shapes';
import { MarkerSquareProps } from '../../types/markers';


export const MarkerSquare: React.FC<MarkerSquareProps> = ({
  id,
  size = 10,
  color = '#000',
  markerStyle = {},
  ...attributes
}) => {
  const style = {
    fill: color,
    ...markerStyle
  };
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
        style={style}
        {...attributes}
      />
    </Marker>
  );
};

MarkerSquare.displayName = 'MarkerSquare';
