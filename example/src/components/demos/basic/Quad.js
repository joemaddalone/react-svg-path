import React from 'react';
import { Quad, Circle, Svg } from 'react-svg-path';

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
    <p>Quad is drawn...</p>
    <Svg width={100} height={100}>
      <Quad sx={10} sy={50} cx={25} cy={25} ex={40} ey={50} />
    </Svg>
    <p>
      The `T` or `t` command can be accessed by adding the appropriate `T` or
      `t` prop to draw a smooth quadratic Bézier curve from the current point to
      the end point specified by x,y.
    </p>
    <Svg width={400} height={80}>
      <Quad
        sx={10}
        sy={50}
        cx={25}
        cy={25}
        ex={40}
        ey={50}
        T={[
          [70, 50],
          [100, 50],
          [130, 50],
          [160, 50],
          [190, 50],
          [220, 50]
        ]}
      />
    </Svg>
    <code>
      {`
<Quad ... T={[ [ x, y ], [ x, y ] ]} />
      `.trim()}
    </code>
    <p>
      Note: if you want to attach a shape at the end of a Quad you need to use
      the absolute version of `T`.
      <br /> <i>... working on it</i>.
    </p>
  </>
);

QuadDemo.displayName = 'Quad';
