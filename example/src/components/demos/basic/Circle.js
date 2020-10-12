import React from 'react';
import { Circle } from 'react-svg-path';
import Svg from '../../helpers/Svg';

export const CircleDemo = () => (
  <>
    <h3 className='ui-header'>.circle(size, cx, cy)</h3>
    <p>
      .circle is drawn from center points (cx & cy). The cursor is then moved to
      the center points.
    </p>
    <Svg width={140} height={120}>
      <Circle size={95} cx={50} cy={50} />
      <Circle size={10} cx={50} cy={50} className='filled' />
    </Svg>
  </>
);

CircleDemo.displayName = 'CircleDemo'
