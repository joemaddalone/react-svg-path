import React from 'react';
import {
  Svg,
  PathMerge,
  Line,
  RegPolygon,
  Circle,
  Text,
  Triangle,
  Square
} from 'react-svg-path';
import './NestingDemo1.css';

const NestingDemo1 = () => (
  <>
    <h3>Nesting example #1</h3>
    <p>
      Since all of our shape components start and end in the center nesting
      multiple will result in all of them sharing the same center points.
    </p>
    <Svg width={150} height={150} className='nesting-example-1'>
      <RegPolygon size={120} sides={6} cx={75} cy={75}>
        <Triangle size={105} />
        <Circle size={60} />
        <Square size={60} />
      </RegPolygon>
    </Svg>
    <div>
      <code>
        {`
<RegPolygon size={120} sides={6} cx={75} cy={75}>
  <Triangle size={105} /> // no need for cx or cy
  <Circle size={60} />    // no need for cx or cy
  <Square size={60} />    // no need for cx or cy
</RegPolygon>`.trim()
}
      </code>
    </div>
  </>
);

export default NestingDemo1;
