import React from 'react';
import Path, { Svg } from 'react-svg-path';

const Gear = ({ size, cx, cy }) => {
  const rect = new Path().square(size, cx, cy);

  return (
    <Svg width={250} height={250}>
      {Array.from({ length: 8 }).map((_, index) => {
        return (
          <g key={index} transform={`rotate(${index * 15} ${cx} ${cy})`}>
            <path d={rect.toString()} fill='red' />
          </g>
        );
      })}
    </Svg>
  );
};

export default Gear;
