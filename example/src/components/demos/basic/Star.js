import React from 'react';
import { Star, Svg } from 'react-svg-path';

export const StarDemo = () => (
  <>
    <h3>Star</h3>
    <code>
      {`
        <Star size={number} points={number} cx={number} cy={number} innerRadius={number} />
      `.trim()}
    </code>
    <p>
      Star is drawn from center point (cx & cy). The cursor is then moved to the
      center point.
    </p>
    <Svg width={140} height={120}>
      <Star outerSize={120} innerSize={40} points={5} cx={70} cy={60} />
      <Star
        outerSize={15}
        innerSize={5}
        points={5}
        cx={70}
        cy={60}
        className='filled'
      />
    </Svg>
  </>
);

StarDemo.displayName = 'Star';
