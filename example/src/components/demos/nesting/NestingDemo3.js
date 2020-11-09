import React from 'react';
import {
  Svg,
  Circle,
  Line,
} from 'react-svg-path';
import './NestingDemo3.css';

const NestingDemo3 = () => (
  <>
    <h3>Nesting example #3</h3>
    <p>
      You can alter an inherited value using <b>ox</b> (offset x) or <b>oy</b> (offset y).
    </p>
    <Svg width={500} height={150} className='nesting-example-3'>
      <Circle size={0} cx={75} cy={75}>
        <Circle size={60} oy={-20} />
        <Circle size={60} oy={10} ox={-20} />
        <Circle size={60} oy={10} ox={20} />
      </Circle>
      <Line sx={200} sy={75} ex={400} ey={75}>
        <Circle size={20} ox={-100} />
      </Line>
    </Svg>
    <div>
      <code>
        {`
<Circle size={0} cx={75} cy={75}>       // center point with a zero size circle.  neat.
  <Circle size={60} oy={-20} />         // offset the y coordinate by -20
  <Circle size={60} oy={10} ox={-20} /> // y+10, x-20
  <Circle size={60} oy={10} ox={20} />  // y+10, x+20
</Circle>

<Line sx={200} sy={75} ex={400} ey={75}>
  <Circle size={20} ox={-100} /> // offset x to center of line
</Line>`
.trim()}
      </code>
    </div>
  </>
);

export default NestingDemo3;
