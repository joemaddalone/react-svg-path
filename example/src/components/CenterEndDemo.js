import React from 'react';
import { Svg, RadialLines, MarkerLine } from 'react-svg-path';

export const CenterEndDemo = () => {
  return (
    <>
      <h2>centerEnd</h2>
      <p>
        Some components in react-svg-path are guranteed to end at their center
        points. This behavior can be turned off with{' '}
        <i>centerEnd={`{false}`}</i>
      </p>
      <Svg width={500} height={500}>
        <MarkerLine id='markers' size={40} strokeWidth={3} />
        <RadialLines
          fill='none'
          cx={250}
          cy={250}
          innerSize={200}
          outerSize={250}
          points={16}
          stroke='#222'
          centerEnd={false}
          markerMid='url(#markers)'
          markerStart='url(#markers)'
          markerEnd='url(#markers)'
        />
      </Svg>
    </>
  );
};
