import React from 'react';
import { Triangle, Svg } from 'react-svg-path';

export const TriangleDemo = () => (
  <>
    <h3>Triangle</h3>
    <code>
      {`
        <Triangle size={number} cx={number} cy={number} />
      `}
    </code>
    <p>
      Triangle draws an equilateral triangle from center point (cx & cy). The
      cursor is then moved to the center point.
    </p>
    <Svg width={140} height={120}>
      <Triangle size={95} cx={50} cy={60} />
      <Triangle size={10} cx={50} cy={60} className='filled' />
    </Svg>
  </>
);

TriangleDemo.displayName = 'Triangle'
