import React from 'react';
import { Sector, Circle} from 'react-svg-path';
import Svg from '../../helpers/Svg';

export const SectorDemo = () => (
  <>
    <h3 className='ui-header'>.sector(cx, cy, radius, startAngle, endAngle)</h3>
    <p>
      .sector is drawn from center point (cx & cy). The cursor is then moved to
      the center point.
    </p>
    <Svg width={140} height={120}>
      <Sector cx={60} cy={60} radius={50} startAngle={0} endAngle={270} />
      <Circle size={10} cx={60} cy={60} className='filled' />
    </Svg>
  </>
);

SectorDemo.displayName = 'Sector'

