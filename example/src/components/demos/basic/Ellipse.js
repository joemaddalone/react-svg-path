import React from 'react';
import Path from 'react-svg-path';
import Svg from '../../helpers/Svg';

export const Ellipse = () => (
  <>
    <h3 className='ui-header'>.ellipse(width, height, cx, cy)</h3>
    <p>
      .ellipse is drawn from center point (cx & cy). The cursor is then moved to
      the center point.
    </p>
    <Svg width={155} height={120}>
      <path d={new Path().ellipse(150, 75, 80, 50).toString()} />
      <path
        d={new Path().ellipse(15, 7.5, 80, 50).toString()}
        className='filled'
      />
    </Svg>
  </>
);

Ellipse.displayName = 'Ellipse'
