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
import './NestingDemo3.css';

const NestingDemo3 = () => (
  <>
    <h3>Nesting example #3</h3>
    <p>
      Adding one or more shapes to the end of a &lt;Line> requires very little
      effort.
    </p>
    <Svg width={700} height={700} className='nesting-example-2'>
      <Circle size={100} cx={150} cy={150} fill='white' stroke='#222'>
        <Line ex={150} ey={130} stroke='#ccc'>
          <Circle size={2} fill='#ccc' />
        </Line>
        <Line ex={150} ey={170} stroke='#ccc'>
          <Circle size={2} fill='#ccc' />
        </Line>
        <Line ex={130} ey={150} stroke='#ccc'>
          <Square size={3} fill='#ccc' />
        </Line>
        <Line ex={170} ey={150} stroke='#ccc'>
          <Square size={3} fill='#ccc' />
        </Line>
        <Line ex={110} ey={190} stroke='red'>
          <Circle size={5} fill='red' />
        </Line>
        <Line ex={190} ey={190} stroke='blue'>
          <Text dy={6} dx={2}>
            text
          </Text>
        </Line>
        <Line ex={190} ey={110} stroke='green'>
          <Square size={6} fill='green' />
        </Line>
        <Line ex={110} ey={110} stroke='purple'>
          <RegPolygon size={6} sides={6} fill='purple' />
        </Line>
      </Circle>
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
</Line>`.trim()}
      </code>
    </div>
  </>
);

export default NestingDemo3;
