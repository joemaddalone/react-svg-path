import React from 'react';
import { Quad, Svg } from 'react-svg-path';

export const QuadDemo = () => (
  <>
    <h3>Quad (quadratic curve or q curve.)</h3>
    <code>
      {`
<Quad
  sx={number}
  sy={number}
  cx1={number}
  cy1={number}
  ex={number}
  ey={number}
/>
      `.trim()}
    </code>
    <p>
      Quad is drawn...
    </p>
    <Svg width={80} height={80}>
      <Quad sx={10} sy={40} cx={35} cy={0} ex={70} ey={40} />
    </Svg>
  </>
);

QuadDemo.displayName = 'Quad';
