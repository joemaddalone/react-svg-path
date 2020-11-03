import React from 'react';
import { RegPolygon, Svg } from 'react-svg-path';
import docs from '../../../docs/docs.json'

export const RegPolygonDemo = () => (
  <>
    <h3>RegPolygon</h3>
    <code>
      {`
        <RegPolygon size={number} sides={number} cx={number} cy={number} />
      `.trim()}
    </code>
    <p>
      {docs.regPolygon.description}
    </p>
    <Svg width={140} height={120}>
      <RegPolygon size={100} sides={6} cx={50} cy={50} />
      <RegPolygon size={10} sides={6} cx={50} cy={50} className='filled' />
    </Svg>
  </>
);

RegPolygonDemo.displayName = 'RegPolygon';
