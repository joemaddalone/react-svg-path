import React from 'react';
import { Ellipse } from 'react-svg-path';
import Svg from '../../helpers/Svg';

export const EllipseDemo = () => (
  <>
    <h3 className='ui-header'>.ellipse(width, height, cx, cy)</h3>
    <p>
      .ellipse is drawn from center point (cx & cy). The cursor is then moved to
      the center point.
    </p>
    <Svg width={155} height={120}>
      <Ellipse width={150} height={75} cx={80} cy={50} />
      <Ellipse width={15} height={7.5} cx={80} cy={50} className='filled'
      />
    </Svg>
  </>
);

EllipseDemo.displayName = 'Ellipse'
