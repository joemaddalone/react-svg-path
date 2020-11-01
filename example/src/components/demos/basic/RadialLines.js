import React from 'react';
import { RadialLines, Svg } from 'react-svg-path';

export const RadialLinesDemo = () => (
  <>
    <h3>Star</h3>
    <code>
      {`
<RadialLines
  innerSize={number}
  outerSize={number}
  points={number}
  cx={number}
  cy={number}
/>
      `.trim()}
    </code>
    <p>
    RadialLines is drawn from center point (cx & cy). The cursor is then moved to the
      center point.
    </p>
    <Svg width={140} height={120}>
      <RadialLines innerSize={50} outerSize={120} points={8} cx={70} cy={60} />
    </Svg>
  </>
);

RadialLinesDemo.displayName = 'RadialLines';
