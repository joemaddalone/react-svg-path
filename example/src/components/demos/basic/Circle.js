import React from 'react';
import Path from 'react-svg-path';
import Svg from '../../helpers/Svg';

export const Circle = () => (
  <>
    <h3 className='ui-header'>.circle(size, cx, cy)</h3>
    <p>
      .circle is drawn from center points (cx & cy). The cursor is then moved to
      the center points.
    </p>
    <Svg width={140} height={120}>
      <path d={new Path().circle(95, 50, 50).toString()} />
      <path d={new Path().circle(10, 50, 50).toString()} className='filled' />
    </Svg>
  </>
);

Circle.displayName = 'Circle'
