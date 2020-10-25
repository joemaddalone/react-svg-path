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
    <p>Cubic is drawn...</p>
    <Svg width={200} height={100}>
      <Cubic
        sx={10}
        sy={90}
        cx1={30}
        cy1={90}
        cx2={25}
        cy2={10}
        ex={50}
        ey={10}
      />
    </Svg>
    <p>
      The `S` or `s` command can be accessed by adding the appropriate `S` or
      `s` prop to draw a smooth cubic Bézier curve from the current point to the
      end point specified by x,y.
    </p>
    <Svg width={400} height={125}>
      <Cubic
        sx={10}
        sy={90}
        cx1={30}
        cy1={90}
        cx2={25}
        cy2={10}
        ex={50}
        ey={10}
        S={[[70, 90, 90, 90]]}
      />
    </Svg>
    <code>
      {`
<Cubic ... S={[ [ cx, cy, ex, ey ] ]} />
      `.trim()}
    </code>
    <p>
      Note: if you want to attach a shape at the end of a Cubic you need to use
      the absolute version of `S`.
      <br /> <i>... working on it</i>.
    </p>
  </>
);

CubicDemo.displayName = 'Cubic';
