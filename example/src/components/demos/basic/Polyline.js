import React from 'react';
import { Polyline } from 'react-svg-path';
import Svg from '../../helpers/Svg';

const pointsAbsolute = [
  [10, 60],
  [40, 0],
  [70, 60],
  [40, 120]
];

const pointsRelative = [
  [10, 60],
  [30, -60],
  [30, 60],
  [-30, 60]
];
export const PolylineDemo = () => (
  <>
    <h3 className='ui-header'>.polyline([points], relative = false)</h3>
    <p>
      .polyline accepts an array of [x, y] coordinates and then draws lines
      connecting those points. The path will start from the first point and end
      on the last. points can be absolute or relative.
    </p>
    <h4 className='ui-header'>absolute</h4>
    <Svg width={260} height={160}>
      <Polyline points={pointsAbsolute} />
    </Svg>
    <h4 className='ui-header'>relative</h4>
    <Svg width={260} height={160}>
    <Polyline points={pointsRelative} relative />
    </Svg>
  </>
);

PolylineDemo.displayName = 'Polyline'
