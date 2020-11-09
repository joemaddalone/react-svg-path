import React from 'react';
import { Triangle, Svg } from 'react-svg-path';
import docs from '../../../docs/docs.js'

export const TriangleDemo = () => (
  <>
    <h3>Triangle</h3>
    <code>
      {`
        <Triangle size={number} cx={number} cy={number} />
      `.trim()}
    </code>
    <p>
      {docs.triangle.description}
    </p>
    <Svg width={140} height={120}>
      <Triangle size={95} cx={50} cy={60} />
      <Triangle size={10} cx={50} cy={60} className='filled' />
    </Svg>
  </>
);

TriangleDemo.displayName = 'Triangle'
