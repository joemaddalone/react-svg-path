import React from 'react';
import Path from 'react-svg-path';
import Svg from '../../helpers/Svg';

export const Rect = () => (
  <>
    <h3 className='ui-header'>.rect(width, height, cx, cy)</h3>
    <p>
      .rect is drawn from center point (cx & cy). The cursor is then moved to
      the center point.
    </p>
    <Svg width={140} height={120}>
      <path d={new Path().rect(120, 60, 60, 60).toString()} />
      <path d={new Path().rect(10, 5, 60, 60).toString()} className='filled' />
    </Svg>
  </>
);

Rect.displayName = 'Rect'
