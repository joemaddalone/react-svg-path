import React from 'react';
import { Sector, Circle, Svg} from 'react-svg-path';
import docs from '../../../docs/docs.js'

export const SectorDemo = () => (
  <>
    <h3>Sector</h3>
    <code>
      {`
        <Sector cx={number} cy={number} radius={number} startAngle={number} endAngle={number} />
      `.trim()}
    </code>
    <p>
      {docs.sector.description}
    </p>
    <Svg width={140} height={120}>
      <Sector cx={60} cy={60} size={100} startAngle={0} endAngle={270} />
      <Circle size={10} cx={60} cy={60} className='filled' />
    </Svg>
  </>
);

SectorDemo.displayName = 'Sector'

