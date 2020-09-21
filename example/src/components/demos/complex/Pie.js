import React from 'react';
import Path from 'react-svg-path';

const Pie = ({ size, cx, cy, data }) => {
  const percentToDegree = (p) => (p / 100) * 360;
  const sectors = [];
  let total = 0;
  data.forEach((d, i) => {
    const startAngle = percentToDegree(total);
    const endAngle = percentToDegree(total + d.percent);
    const p = new Path();
    p.sector(cx, cy, size / 2, startAngle, endAngle);
    sectors.push(p.toComponent({ key: i, fill: d.color }));
    total = total + d.percent;
  });

  return (
      <g>{sectors}</g>
  );
};

export default Pie;
