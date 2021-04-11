import React from 'react';
import Path, {
  Svg,
  Circle,
  PathMerge,
  RegPolygon,
  Square,
  Line
} from 'react-svg-path';

import './App.css';
const PathOne = () => <path d='M0,0h100v100' stroke='red' />;
const PathTwo = () => <path d='M0,0v100h200' stroke='green' />;
const PathThree = ({ x, y, w, h, ...rest }) => {
  const p = new Path();
  return p
    .M(x, y)
    .l(-w / 2, h)
    .right(w)
    .close()
    .toComponent(rest);
};

const App = ({ active }) => {
  return (
    <>
      <Svg width={300} height={300}>
        <PathMerge fill='none' stroke='green'>
          <Circle size={10} />
          <PathOne />
          <PathTwo />
          <PathThree x={100} y={100} w={150} h={150} />
        </PathMerge>
      </Svg>
      <Svg width={200} height={200} className='nesting-example-1' scale>
        <PathMerge fill='none' stroke='black'>
          <RegPolygon size={120} sides={4} cx={100} cy={100}>
            {active > 0 && <Circle size={55} />}
            <Square size={60} />
            <Circle size={25} cy={58} />
          </RegPolygon>
          <Circle size={10} cx={100} cy={100} />
        </PathMerge>
      </Svg>
      <svg width={250} height={250}>
        <PathMerge fill='none' stroke='black'>
          <Line sx={0} sy={0} ex={100} ey={100}>
            <Line sx={50} sy={80} ex={300} ey={300} />
          </Line>
          <path d='M0,0h200v100' stroke='red' />
        </PathMerge>
      </svg>
    </>
  );
};

export default App;
