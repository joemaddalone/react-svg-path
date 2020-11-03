import React from 'react';
import { RadialLines, Svg } from 'react-svg-path';
import docs from '../../../docs/docs.json'

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
    {docs.radialLines.description}
    </p>
    <Svg width={140} height={120}>
      <RadialLines innerSize={50} outerSize={120} points={8} cx={70} cy={60} />
    </Svg>
  </>
);

RadialLinesDemo.displayName = 'RadialLines';
