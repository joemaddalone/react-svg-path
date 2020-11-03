import React from 'react';
import { Ellipse, Svg } from 'react-svg-path';
import docs from '../../../docs/docs.json'

export const EllipseDemo = () => (
  <>
    <h3>Ellipse</h3>
    <code>
      {`
        <Ellipse width={number} height={number} cx={number} cy={number} />
      `.trim()}
    </code>
    <p>
      {docs.ellipse.description}
    </p>
    <Svg width={155} height={120}>
      <Ellipse width={150} height={75} cx={80} cy={50} />
      <Ellipse width={15} height={7.5} cx={80} cy={50} className='filled'
      />
    </Svg>
  </>
);

EllipseDemo.displayName = 'Ellipse'
