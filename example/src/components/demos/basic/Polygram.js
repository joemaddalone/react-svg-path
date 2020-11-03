import React from 'react';
import { Polygram, Svg } from 'react-svg-path';
import docs from '../../../docs/docs.json'

export const PolygramDemo = () => (
  <>
    <h3>Polygram</h3>
    <code>
      {`
        <Polygram points={number} cx={number} cy={number} size={number} vertexSkip={number = 2} />
      `.trim()}
    </code>
    <p>
      {docs.polygram.description}
    </p>
    <Svg width={140} height={120}>
      <Polygram size={120} points={5} cx={70} cy={60} />
      <Polygram
        size={15}
        points={5}
        cx={70}
        cy={60}
        className='filled'
      />
    </Svg>
  </>
);

PolygramDemo.displayName = 'Polygram';
