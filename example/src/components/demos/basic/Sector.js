import React from 'react';
import Path from 'react-svg-path';
import Svg from '../../helpers/Svg';

export const Sector = () => (
  <>
    <h3 className='ui-header'>.sector(cx, cy, radius, startAngle, endAngle)</h3>
    <p>
      .sector is drawn from center point (cx & cy). The cursor is then moved to
      the center point.
    </p>
    <Svg width={140} height={120}>
      <path d={new Path().sector(60, 60, 50, 0, 270).toString()} />
      <path d={new Path().circle(10, 60, 60).toString()} className='filled' />
    </Svg>
  </>
);

Sector.displayName = 'Sector'
