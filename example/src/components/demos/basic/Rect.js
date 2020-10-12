import React from 'react';
import { Rect } from 'react-svg-path';
import Svg from '../../helpers/Svg';

export const RectDemo = () => (
  <>
    <h3 className='ui-header'>.rect(width, height, cx, cy)</h3>
    <p>
      .rect is drawn from center point (cx & cy). The cursor is then moved to
      the center point.
    </p>
    <Svg width={140} height={120}>
      <Rect width={120} height={60} cx={60} cy={60} />
      <Rect width={10} height={5} cx={60} cy={60} className='filled' />
    </Svg>
  </>
);

RectDemo.displayName = 'Rect'
