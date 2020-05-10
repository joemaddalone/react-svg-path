import React from 'react';
import Path from 'react-svg-path';
import './App.css';

const Square = ({ x, y, size }) => {
  const path = new Path()
    .moveTo(x, y)
    .lineTo(x + size, y)
    .lineTo(x + size, y + size)
    .lineTo(x, y + size)
    .close()
    .stroke('red');
  return path.toElement();
};

const Circle = ({ x, y, radius }) => {
  const path = new Path()
    .M(x, y)
    .m(-radius, 0)
    .a(radius, radius, 0, 1, 0, radius * 2, 0)
    .a(radius, radius, 0, 1, 0, -(radius * 2), 0)
    .style({ fill: 'green' });
  return path.toElement();
};

const SparkLine = ({ x, y, width, data }) => {
  const path = new Path().moveTo(x, y).stroke('purple').strokeWidth(2);
  const pointDistance = parseInt(width / data.length);
  data.forEach((val, index, arr) => {
    if (index !== 0) {
      const prev = arr[index - 1];
      path.l(pointDistance, prev - val);
    } else {
      path.l(0, -val);
    }
  });
  return path.toElement();
};

const App = () => {
  const width = 800;
  const height = 800;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio='none'
    >
      <Square x={50} y={50} size={50} />
      <Circle x={200} y={75} radius={50} />
      <SparkLine
        x={25}
        y={200}
        width={250}
        data={[0, 10, 5, 25, 15, 35, 5, 18, 50, 3, 25, 2, 35, 10]}
      />
    </svg>
  );
};

export default App;
