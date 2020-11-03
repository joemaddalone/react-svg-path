import React from 'react';
import { Segment, Circle, Svg } from 'react-svg-path';
import docs from '../../../docs/docs.json'

export const SegmentDemo = () => (
  <>
    <h3 className='ui-header'>Segment</h3>
    <code>
      {`
        <Segment cx={number} cy={number} radius={number} startAngle={number} endAngle={number} />
      `.trim()}
    </code>
    <p>
      {docs.segment.description}
    </p>

    <Svg width={140} height={120}>
      <Segment cx={60} cy={60} size={100} startAngle={0} endAngle={270} />
      <Circle size={10} cx={60} cy={60} className='filled' />
    </Svg>
  </>
);

SegmentDemo.displayName = 'Segment';
