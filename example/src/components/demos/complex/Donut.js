import React from 'react';
import Path from 'react-svg-path';

const Donut = ({ size, width, cx, cy, data, ...rest }) => {
  const percentToDegree = (p) => (p / 100) * 360;
  const segments = [];
  let total = 0;
  data.forEach((d, i) => {
    const startAngle = percentToDegree(total);
    const endAngle = percentToDegree(total + d.percent);
    const p = new Path();
    p.segment(cx, cy, (size - width) / 2, startAngle, endAngle);
    segments.push(
      p.toComponent({
        key: i,
        strokeWidth: width,
        stroke: d.color,
        fill: 'none'
      })
    );
    total = total + d.percent;
  });

  return <g>{segments}</g>;
};

export default Donut;
