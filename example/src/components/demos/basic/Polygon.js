import React from 'react';
import { Polygon, Svg } from 'react-svg-path';
import docs from '../../../docs/docs.js'

const points = [
  [10, 60],
  [40, 0],
  [70, 60],
  [40, 120]
];

export const PolygonDemo = () => (
  <>
    <h3>Polygon</h3>
    <code>
      {`
const points = [
  [10, 60],
  [40, 0],
  [70, 60],
  [40, 120]
];

<Polygon points={points} />
      `.trim()}
    </code>
    <p>
      {docs.polygon.description}
    </p>
    <Svg width={140} height={120}>
      <Polygon points={points} />
    </Svg>
  </>
);

PolygonDemo.displayName = 'Polygon';
