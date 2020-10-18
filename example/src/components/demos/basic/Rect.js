import React from 'react';
import { Rect, Svg } from 'react-svg-path';

export const RectDemo = () => (
  <>
    <h3>Rect</h3>
    <code>
      {`
        <Rect width={number} height={number} cx={number} cy={number} />
      `.trim()}
    </code>
    <p>
      Rect is drawn from center point (cx & cy). The cursor is then moved to
      the center point.
    </p>
    <Svg width={140} height={120}>
      <Rect width={120} height={60} cx={60} cy={60} />
      <Rect width={10} height={5} cx={60} cy={60} className='filled' />
    </Svg>
  </>
);

RectDemo.displayName = 'Rect'
