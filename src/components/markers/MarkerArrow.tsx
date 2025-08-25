import React from 'react';
import { Marker } from './Marker';
import { Polyline } from '../shapes';
import { MarkerArrowProps } from '../../types/markers';

export const MarkerArrow: React.FC<MarkerArrowProps> = ({
  id,
  color = '#000',
  markerStyle = {},
  ...attributes
}) => {
  const style = {
    fill: 'none',
    stroke: color,
    ...markerStyle
  };
  return (
    <Marker id={id} markerWidth={10} markerHeight={11} refX={8} refY={5}>
      <Polyline
        points={[
          [0, 0],
          [8, 5],
          [0, 10]
        ]}
        style={style}
        {...attributes}
      />
    </Marker>
  );
};

MarkerArrow.displayName = 'MarkerArrow';
