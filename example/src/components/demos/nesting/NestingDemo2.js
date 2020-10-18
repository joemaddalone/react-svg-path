import React from 'react';
import {
  Svg,
  PathMerge,
  Line,
  RegPolygon,
  Circle,
  Text,
  Triangle,
  Polygon,
  Polyline,
  Square,
  Rect
} from 'react-svg-path';
import './NestingDemo2.css';

const points = [
  [210, 25],
  [270, 25],
  [240, 50]
];

const genPolylineZag = (centerY) => {
  const ypoints = Array.from({ length: 10 }).map((p, i) => {
    return i % 2 === 0 ? centerY - 5 : centerY + 5;
  });
  const points = ypoints.map((y, i) => {
    return [10 * i, y];
  });
  points.shift();
  points.push([100, centerY]);
  points.push([130, centerY]);

  return points;
};

const NestingDemo2 = () => (
  <>
    <h3>Nesting example #2</h3>
    <p>
      Adding one or more shapes or even &lt;Text> to the end of any other shapes
      requires very little effort.
    </p>
    <Svg width={200} height={140} className='nesting-example-2'>
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
      <Polyline points={genPolylineZag(100)} stroke='red' fill='none'>
        <Text dx={2} dy={5}>
          Polyline
        </Text>
      </Polyline>
      <Line sx={10} sy={125} ex={130} ey={125} stroke='red'>
        <Text dx={2} dy={5}>
          Line
        </Text>
      </Line>
    </Svg>
    <div>
      <code>
        {`
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
<Polyline points={genPolylineZag(100)} stroke='red' fill="none">
  <Text dx={2} dy={5}>
    Polyline
  </Text>
</Polyline>
<Line sx={10} sy={125} ex={130} ey={125} stroke='red'>
  <Text dx={2} dy={5}>
    Line
  </Text>
</Line>`.trim()}
      </code>
    </div>
    <p>
      This can be reversed to use the parent starting point with the{' '}
      <em>inheritStart</em> prop.
    </p>
    <Svg width={200} height={45} className='nesting-example-2'>
      <Line sx={10} sy={25} ex={130} ey={25} stroke='#ccc'>
        <Circle size={15} fill='#ccc' inheritStart />
      </Line>
    </Svg>
    <div>
      <code>
        {`
<Line sx={10} sy={25} ex={130} ey={25} stroke='#ccc'>
 <Circle size={15} fill='#ccc' inheritStart />
</Line>`.trim()}
      </code>
    </div>
    <p>And you can mix an match with multiple nested components</p>
    <Svg width={200} height={45} className='nesting-example-2'>
      <Polyline points={genPolylineZag(25)} stroke='red' fill='none'>
        <Text dx={4} dy={5}>
          Polyline
        </Text>
        <Circle size={10} fill='red' inheritStart />
      </Polyline>
    </Svg>
    <div>
      <code>
        {`
<Polyline points={genPolylineZag(25)} stroke='red' fill='none'>
  <Text dx={4} dy={5}>
    Polyline
  </Text>
  <Circle size={10} fill='red' inheritStart />
</Polyline>`.trim()}
      </code>
    </div>
  </>
);

export default NestingDemo2;
