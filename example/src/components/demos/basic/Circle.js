import React from 'react';
import { Circle, Svg } from 'react-svg-path';


export const CircleDemo = () => (
  <>
      <h3 className="ui-header">Circle</h3>
    <code>{`
        <Circle size={number} cx={number} cy={number} />
      `}
      </code>
    <p>
      Circle is drawn from center points (cx & cy). The cursor is then moved to
      the center points.
    </p>
    <Svg width={140} height={120}>
      <Circle size={95} cx={50} cy={50} />
      <Circle size={10} cx={50} cy={50} className='filled' />
    </Svg>
  </>
);

CircleDemo.displayName = 'CircleDemo'
