import React from 'react';
import { MarkerArrow, Polyline, Segment, Svg } from 'react-svg-path';

export const MarkerArrowDemo = () => (
  <>
    <h3>MarkerArrow</h3>
    <code>
      {`
        <MarkerArrow open={boolean} color='red' />
      `.trim()}
    </code>
    <p>MarkerArrow can be open or closed.</p>
    <Svg width={250} height={250}>
      <MarkerArrow open id='arrow-open' color='red' />
      <MarkerArrow  id='arrow' color='red' />
      <Polyline
        markerStart='url(#arrow-open)'
        markerEnd='url(#arrow)'
        fill='none'
        stroke='red'
        points={[
          [20, 60],
          [40, 10],
          [60, 60],
          [100, 50],
          [100, 20],
          [200, 100]
        ]}
      />
    </Svg>
  </>
);

MarkerArrowDemo.displayName = 'MarkerArrow';
