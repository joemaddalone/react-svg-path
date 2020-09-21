import React from 'react';
import Path from 'react-svg-path';
import Svg from '../../helpers/Svg';

export const Triangle = () => (
  <>
    <h3 className='ui-header'>.triangle(size, cx, cy)</h3>
    <p>
      .triangle draws an equilateral triangle from center point (cx & cy). The
      cursor is then moved to the center point.
    </p>
    <Svg width={140} height={120}>
      <path d={new Path().triangle(95, 50, 60).toString()} />
      <path d={new Path().triangle(10, 50, 60).toString()} className='filled' />
    </Svg>
  </>
);

Triangle.displayName = 'Triangle'
