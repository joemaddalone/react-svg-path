import React from 'react';
import { PathMerge, Circle } from 'react-svg-path';
import Svg from '../../helpers/Svg';

export const Circles = () => (
  <>
    <h3 className='ui-header'>.circle(size, cx, cy)</h3>
    <p>
      .circle is drawn from center points (cx & cy). The cursor is then moved to
      the center points.
    </p>
    <Svg width={300} height={120}>
      <PathMerge>
        {[1,1,2,3,5,7,13,21].map((i, index) => <Circle key={i} size={i} cx={i*index} cy={50} />)}
      </PathMerge>
    </Svg>
  </>
);
