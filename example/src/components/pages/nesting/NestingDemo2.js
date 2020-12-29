import React from 'react';
import { Svg, Line, Circle, Text, Polyline, Square, Arc } from 'react-svg-path';
import { translate as t } from '../../../i18n/i18n';

import './NestingDemo2.css';

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
    <h2>{t('pages.nesting.example2')}</h2>
    <p>{t('pages.nesting.end')}</p>
    <Svg width={200} height={200} className='nesting-example-2' scale>
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

      <Line sx={10} sy={150} ex={100} ey={150} stroke='red'>
        <Arc rx={10} ry={10} ex={175} ey={150} fill='none' stroke='red'>
          <Circle size={15} fill='red' />
        </Arc>
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
<Line sx={10} sy={150} ex={100} ey={150} stroke='red'>
  <Arc rx={10} ry={10} ex={175} ey={150} fill='none' stroke='red'>
    <Circle size={15} fill='red' />
  </Arc>
</Line>`.trim()}
      </code>
    </div>
    <p>{t('pages.nesting.start')}</p>
    <Svg width={200} height={45} className='nesting-example-2'>
      <Line sx={10} sy={25} ex={130} ey={25} stroke='#ccc'>
        <Circle size={15} fill='#ccc' attach='start' />
      </Line>
    </Svg>
    <div>
      <code>
        {`
<Line sx={10} sy={25} ex={130} ey={25} stroke='#ccc'>
 <Circle size={15} fill='#ccc' attach='start' />
</Line>`.trim()}
      </code>
    </div>
    <p>{t('pages.nesting.mix')}</p>
    <Svg width={200} height={45} className='nesting-example-2'>
      <Polyline points={genPolylineZag(25)} stroke='red' fill='none'>
        <Text dx={4} dy={5}>
          Polyline
        </Text>
        <Circle size={10} fill='red' attach='start' />
      </Polyline>
    </Svg>
    <div>
      <code>
        {`
<Polyline points={genPolylineZag(25)} stroke='red' fill='none'>
  <Text dx={4} dy={5}>
    Polyline
  </Text>
  <Circle size={10} fill='red' attach='start' />
</Polyline>`.trim()}
      </code>
    </div>
  </>
);

export default NestingDemo2;
