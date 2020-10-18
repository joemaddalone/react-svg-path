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
import './NestingDemo2.css';

const NestingDemo2 = () => (
  <>
    <h3>Nesting example #2</h3>
    <p>
      Adding one or more shapes or even &lt;Text> to the end of a &lt;Line> requires very little effort.
    </p>
    <Svg width={200} height={120} className='nesting-example-2'>
      <Line sx={10} sy={25} ex={130} ey={25} stroke='#ccc'>
        <Circle size={15} fill='#ccc' />
      </Line>
      <Line sx={10} sy={50} ex={130} ey={50} stroke='red'>
        <Square size={20} fill='red' />
      </Line>
      <Line sx={10} sy={75} ex={135} ey={75} stroke='green'>
        <Line ex={125} ey={70} stroke='green' />
        <Line ex={125} ey={80} stroke='green' />
      </Line>
      <Line sx={10} sy={100} ex={130} ey={100} stroke='red'>
        <Text dx={2} dy={5}>Hello</Text>
      </Line>
    </Svg>
    <div>
      <code>
        {`
<Line sx={10} sy={25} ex={130} ey={25} stroke='#ccc'>
  <Circle size={15} fill='#ccc' /> // no need for cy or cy
</Line>
<Line sx={10} sy={50} ex={130} ey={50} stroke='red'>
  <Square size={20} fill='red' /> // no need for cy or cy
</Line>
<Line sx={10} sy={75} ex={135} ey={75} stroke='green'>
  <Line ex={125} ey={70} stroke='green' /> // no need for sy or sy
  <Line ex={125} ey={80} stroke='green' /> // no need for sy or sy
</Line>
<Line sx={10} sy={100} ex={130} ey={100} stroke='red'>
  <Text dx={2} dy={5}>Hello</Text>
</Line>`.trim()}
      </code>
    </div>
  </>
);

export default NestingDemo2;
