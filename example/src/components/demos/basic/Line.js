import React from 'react';
import { Line, Svg } from 'react-svg-path';

export const LineDemo = () => (
  <>
    <h3>Line</h3>
    <code>
      {`
        <Line sx={number} sy={number} ex={number} ey={number} relative={false} />
      `.trim()}
    </code>
    <p>
      Line is drawn from starting points (sx & sy) to ending points (ex & ey). sx (starting x) & sy (starting y) will always be absolutely
      positioned, however with relative=true the ex and ey points can relative
      to sx & sy.
    </p>
    <Svg width={80} height={80}>
      <Line sx={10} sy={10} ex={50} ey={50} />
    </Svg>
  </>
);

LineDemo.displayName = 'Line';
