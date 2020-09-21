import React from 'react';
import Path from 'react-svg-path';
import Svg from '../../helpers/Svg';

export const RegPolygon = () => (
  <>
    <h3 className='ui-header'>.regPolygon(size, sides, cx, cy)</h3>
    <p>
      .regPolygon is drawn from center point (cx & cy). The cursor is then moved
      to the center point.
    </p>
    <Svg width={140} height={120}>
      <path d={new Path().regPolygon(100, 6, 50, 50).toString()} />
      <path
        d={new Path().regPolygon(10, 6, 50, 50).toString()}
        className='filled'
      />
    </Svg>
  </>
);

RegPolygon.displayName = 'RegPolygon'
