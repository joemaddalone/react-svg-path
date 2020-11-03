import React from 'react';
import { Segment } from 'react-svg-path';

const Donut = ({ size, width, cx, cy, data, ...rest }) => {
  const percentToDegree = (p) => (p / 100) * 360;
  const segments = [];
  let total = 0;
  data.forEach((d, i) => {
    const startAngle = percentToDegree(total);
    const endAngle = percentToDegree(total + d.percent);
    segments.push(
      <Segment
        cx={cx}
        cy={cy}
        size={size - width}
        startAngle={startAngle}
        endAngle={endAngle}
        key={i}
        strokeWidth={width}
        stroke={d.color}
        fill='none'
       />
    );
    total = total + d.percent;
  });

  return <g>{segments}</g>;
};

export default Donut;
