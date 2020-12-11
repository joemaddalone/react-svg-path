import React from 'react';
import { Marker } from './Marker';
import { Polyline } from '../BasicShapes';

export const MarkerTriangle = ({ id, color = '#000', ...attributes }) => {
  const settings = {
    fill: color,
    stroke: 'none'
  };
  return (
    <Marker id={id} markerWidth={10} markerHeight={11} refX={7} refY={5}>
      <Polyline
        points={[
          [0, 0],
          [8, 5],
          [0, 10]
        ]}
        {...settings}
        {...attributes}
      />
    </Marker>
  );
};
