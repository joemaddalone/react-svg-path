import React from 'react';
import { Marker } from './Marker';
import { Polyline } from '../Polyline';

export const MarkerArrow = ({
  id,
  color = '#000',
  open = false,
  ...attributes
}) => {
  const settings = {
    fill: open ? 'none' : color,
    stroke: open ? color : 'none'
  };
  return (
    <Marker id={id} markerWidth={10} markerHeight={11} refX={8} refY={5}>
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
