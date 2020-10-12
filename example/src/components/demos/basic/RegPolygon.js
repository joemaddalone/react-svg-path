import React from 'react';
import { RegPolygon } from 'react-svg-path';
import Svg from '../../helpers/Svg';

export const RegPolygonDemo = () => (
  <>
    <h3 className='ui-header'>.regPolygon(size, sides, cx, cy)</h3>
    <p>
      .regPolygon is drawn from center point (cx & cy). The cursor is then moved
      to the center point.
    </p>
    <Svg width={140} height={120}>
      <RegPolygon size={100} sides={6} cx={50} cy={50} />
      <RegPolygon size={10} sides={6} cx={50} cy={50} className='filled'
      />
    </Svg>
  </>
);

RegPolygonDemo.displayName = 'RegPolygon'
