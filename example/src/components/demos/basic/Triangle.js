import React from 'react';
import { Triangle} from 'react-svg-path';
import Svg from '../../helpers/Svg';

export const TriangleDemo = () => (
  <>
    <h3 className='ui-header'>.triangle(size, cx, cy)</h3>
    <p>
      .triangle draws an equilateral triangle from center point (cx & cy). The
      cursor is then moved to the center point.
    </p>
    <Svg width={140} height={120}>
      <Triangle size={95} cx={50} cy={60} />
      <Triangle size={10} cx={50} cy={60} className='filled' />
    </Svg>
  </>
);

TriangleDemo.displayName = 'Triangle'
