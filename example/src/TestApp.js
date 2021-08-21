import React from 'react';
import Path, {
  Svg,
  Circle,
  PathMerge,
  RegPolygon,
  Square,
  Line,
  Omino
} from 'react-svg-path';

import './App.css';

const LocalOmino = ({ size, shape, sx, sy, lined = false, ...rest }) => {
  const p = new Path();
  const arrangement = Path.positionByArray(size, shape, sx, sy);
  arrangement.forEach((r, index, arr) => {
    const { cx, cy, ri, ci, size } = r;
    const halfSize = size / 2;
    const hasLeftSib = arr.find((a) => a.ri === ri && a.ci === ci - 1);
    const hasRightSib = arr.find((a) => a.ri === ri && a.ci === ci + 1);
    const hasUpSib = arr.find((a) => a.ri === ri - 1 && a.ci === ci);
    const hasDownSib = arr.find((a) => a.ri === ri + 1 && a.ci === ci);
    const left = cx - halfSize;
    const right = cx + halfSize;
    const top = cy - halfSize;
    const bottom = cy + halfSize;
    if (!hasLeftSib || lined) {
      // draw left line
      p.M(left, top);
      p.v(size);
    }
    if (!hasRightSib) {
      // draw right line
      p.M(right, top);
      p.v(size);
    }
    if (!hasUpSib || lined) {
      // draw top line
      p.M(left, top);
      p.h(size);
    }
    if (!hasDownSib) {
      // draw bottom line
      p.M(left, bottom);
      p.h(size);
    }
  });
  return p.toComponent({...rest});
};

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
        <LocalOmino size={15} shape={[[1, 1], [1], [1, 1]]} sx={10} sy={10} stroke="red" />
        <Omino size={15} shape={[[1, 1], [1], [1, 1]]} sx={10} sy={10} stroke="red" />
      </Svg>
      {/* <Svg width={300} height={300}>
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
      </svg> */}
    </>
  );
};

export default App;
