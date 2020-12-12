import React from 'react';
import { Marker } from './Marker';
import { Polyline } from '../BasicShapes';

export const MarkerTriangle = ({
  id,
  color = '#000',
  markerStyle = {},
  ...attributes
}) => {
  const style = {
    fill: color,
    stroke: 'none',
    ...markerStyle
  };
  return (
    <Marker id={id} markerWidth={10} markerHeight={11} refX={7} refY={5}>
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

MarkerTriangle.displayName = 'MarkerTriangle';
