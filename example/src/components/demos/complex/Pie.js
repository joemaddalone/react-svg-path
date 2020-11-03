import React from 'react';
import { Sector } from 'react-svg-path';

const Pie = ({ size, cx, cy, data }) => {
  const percentToDegree = (p) => (p / 100) * 360;
  const sectors = [];
  let total = 0;
  data.forEach((d, i) => {
    const startAngle = percentToDegree(total);
    const endAngle = percentToDegree(total + d.percent);
    sectors.push(
      <Sector
        endAngle={endAngle}
        startAngle={startAngle}
        cx={cx}
        cy={cy}
        size={size}
        key={i}
        fill={d.color} />
    );
    total = total + d.percent;
  });

  return (
      <g>{sectors}</g>
  );
};

export default Pie;
