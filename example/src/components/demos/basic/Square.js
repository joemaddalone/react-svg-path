import React from 'react';
import Path from 'react-svg-path';
import Svg from '../../helpers/Svg';

export const Square = () => (
  <>
    <h3 className='ui-header'>.square(size, cx, cy)</h3>
    <p>
      .square is drawn from center point (cx & cy). The cursor is then moved to
      the center point.
    </p>
    <Svg width={140} height={120}>
      <path d={new Path().square(100, 50, 50).toString()} />
      <path d={new Path().square(10, 50, 50).toString()} className='filled' />
    </Svg>
  </>
);

Square.displayName = 'Square'
