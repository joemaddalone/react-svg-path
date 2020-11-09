import React from 'react';
import { Square, Svg } from 'react-svg-path';
import docs from '../../../docs/docs.js'

export const SquareDemo = () => (
  <>
    <h3>Square</h3>
    <code>
      {`
        <Square size={number} cx={number} cy={number} />
      `.trim()}
    </code>
    <p>
      {docs.square.description}
    </p>
    <Svg width={140} height={120}>
      <Square size={100} cx={50} cy={50} />
      <Square size={10} cx={50} cy={50} className='filled' />
    </Svg>
  </>
);

SquareDemo.displayName = 'Square'
