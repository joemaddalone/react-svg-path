import React from 'react';
import {
  Svg,
  PathMerge,
  Line,
  RegPolygon,
  Circle,
  Text,
  Triangle,
  Square,
  Polyline,
  Segment,
  Sector,
  Group
} from 'react-svg-path';
import './NestingDemo1.css';

const NestingDemo1 = () => (
  <>
    <h3>Nesting example #1</h3>
    <p>
      Since all of our shape components start and end in the center nesting
      multiple will result in all of them sharing the same center points.
    </p>
    <Svg width={200} height={200} className='nesting-example-1'>
      <RegPolygon size={120} sides={4} cx={100} cy={100}>
        <Circle size={55} />
        <Square size={60} />
        <Circle size={25} cy={58} />
      </RegPolygon>
    </Svg>
    <div>
      <code>
        {`
<RegPolygon size={120} sides={4} cx={100} cy={100}>
  <Circle size={55} /> // no need for cx or cy
  <Square size={60} /> // no need for cx or cy
  <Circle size={25} cy={58} /> // cx inherited, cy overwritten
</RegPolygon>
`.trim()}
      </code>
    </div>
  </>
);

export default NestingDemo1;
