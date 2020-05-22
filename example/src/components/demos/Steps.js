import React, { useEffect, useState } from 'react';
import Path from 'react-svg-path';
import Svg from '../Svg';

const Steps = ({ width, height, x, y, data, ...rest }) => {
  const [currentPath, setCurrentPath] = useState([]);
  const [pathArray, setPathArray] = useState([]);

  const steps = 10;
  useEffect(() => {
    const path = new Path().moveTo(x, y);
    const radius = 4;

    const pointDistance = parseInt(width / data.length) - radius * 2;
    const shiftRight = pointDistance / 3;
    data.forEach((val, index, arr) => {
      const prev = index === 0 ? 0 : arr[index - 1];
      for (let index = 0; index < steps; index++) {
        path[prev > val ? 'down' : 'up'](Math.abs(prev - val) / steps);
      }

      for (let index = 0; index < steps; index++) {
        path.right(shiftRight / steps);
      }
      path
        .a(radius, radius, 0, 1, 0, radius * 2, 0)
        .a(radius, radius, 0, 1, 0, -(radius * 2), 0)
        .m(radius * 2, 0);

      if (index !== arr.length - 1) {
        for (let index = 0; index < steps; index++) {
          path.right(shiftRight / steps);
        }
      }
    });
    setPathArray(path.toArray());
  }, [data, width, x, y]);

  useEffect(() => {
    if (pathArray?.length) {
      const curLength = currentPath.length;
      const pathLength = pathArray.length;
      let newPath;
      let timeout;
      if (curLength === pathLength) {
        newPath = [pathArray[0]];
        timeout = 1000;
      } else {
        const tmp = pathArray.slice(0, curLength + 1);
        newPath = tmp;
        timeout = 10;
      }
      setTimeout(() => setCurrentPath(newPath), timeout);
    }
  }, [currentPath, pathArray]);

  return (
    <Svg width={width} height={height}>
      <path d={currentPath} stroke='#f8f8f8' strokeWidth={6} />
      <path d={currentPath} stroke='#222' strokeWidth={0.5} />
    </Svg>
  );
};

export default Steps;
