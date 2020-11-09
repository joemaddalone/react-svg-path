import React from 'react';
import { Polyline, Svg } from 'react-svg-path';
import docs from '../../../docs/docs.js'


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
      {docs.polyline.description}
    </p>
    <h4 className='ui-header'>absolute</h4>
    <div style={{ marginBottom: 15 }}>
      <code>
        {`
const pointsAbsolute = [
  [10, 60],
  [40, 0],
  [70, 60],
  [40, 120]
];

<Polyline points={pointsAbsolute} />`.trim()}
      </code>
    </div>
    <Svg width={260} height={160}>
      <Polyline points={pointsAbsolute} />
    </Svg>
    <h4 className='ui-header'>relative</h4>
    <div style={{ marginBottom: 15 }}>
      <code>
        {`
const pointsRelative = [
  [10, 60],
  [30, -60],
  [30, 60],
  [-30, 60]
];

<Polyline points={pointsRelative} relative />`.trim()}
      </code>
    </div>
    <Svg width={260} height={160}>
      <Polyline points={pointsRelative} relative />
    </Svg>
  </>
);

PolylineDemo.displayName = 'Polyline';
