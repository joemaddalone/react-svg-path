import React from 'react';
import './Marker';

export const MarkerOpenArrow = ({
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
    <Marker id={id} markerWidth={10} markerHeight={11} refX={9} refY={5}>
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
