import React from 'react';
import { Cubic, Svg } from 'react-svg-path';

export const CubicDemo = () => (
  <>
    <h3>Cubic (cubic curve or c curve.)</h3>
    <code>
      {`
<Cubic
  sx={number}
  sy={number}
  cx1={number}
  cy1={number}
  cx2={number}
  cy2={number}
  ex={number}
  ey={number}
/>
      `.trim()}
    </code>
    <p>
      Cubic is drawn...
    </p>
    <Svg width={80} height={80}>
      <Cubic sx={10} sy={40} cx1={30} cy1={0} cx2={45} cy2={0} ex={70} ey={40} />
    </Svg>
  </>
);

CubicDemo.displayName = 'Cubic';
