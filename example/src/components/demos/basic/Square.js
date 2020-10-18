import React from 'react';
import { Square, Svg } from 'react-svg-path';

export const SquareDemo = () => (
  <>
    <h3 className='ui-header'>.square(size, cx, cy)</h3>
    <p>
      .square is drawn from center point (cx & cy). The cursor is then moved to
      the center point.
    </p>
    <Svg width={140} height={120}>
      <Square size={100} cx={50} cy={50} />
      <Square size={10} cx={50} cy={50} className='filled' />
    </Svg>
  </>
);

SquareDemo.displayName = 'Square'
