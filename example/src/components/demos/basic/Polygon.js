import React from 'react';
import { Polygon, Svg } from 'react-svg-path';

const points = [
  [10, 60],
  [40, 0],
  [70, 60],
  [40, 120]
];

export const PolygonDemo = () => (
  <>
    <h3 className='ui-header'>.polygon([points])</h3>
    <p>
      .polygon accepts an array of [x, y] coordinates and then draws lines
      connecting those points. The path will start from the first point and end
      on the first point - closing the shape.
    </p>
    <Svg width={140} height={120}>
      <Polygon points={points} />
    </Svg>
  </>
);

PolygonDemo.displayName = 'Polygon'
