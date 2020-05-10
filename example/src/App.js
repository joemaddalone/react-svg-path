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

/**
 *
 * Draws a circle using react-svg-path
 */
const Circle = ({ x, y, radius, fill }) => {
  const path = new Path()
    .M(x, y)
    .m(-radius, 0)
    .a(radius, radius, 0, 1, 0, radius * 2, 0)
    .a(radius, radius, 0, 1, 0, -(radius * 2), 0)
    .style({ fill });
  return path.toElement();
};

/**
 *
 * Draws a spack line using react-svg-path
 */
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

/**
 *
 * Draws a grid using react-svg-path
 */
const Grid = ({ x, y, width, height, cols, rows, close = true }) => {
  const lines = new Path().M(x, y);
  const extra = close ? 1 : 0;
  const colWidth = width / cols;
  const rowHeight = height / rows;
  Array.from({ length: cols + extra }).map((_, index) =>
    lines.M(x + index * colWidth, y).down(height)
  );
  Array.from({ length: rows + extra }).map((_, index) =>
    lines.M(x, y + index * rowHeight, y).right(width)
  );
  return <path d={lines.toString()} stroke='#eee' />;
};

const App = () => {
  const width = 500;
  const height = 500;
  return (
    <>
    <h2>react-svg-path</h2>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <Grid x={0} y={0} width={width} height={height} cols={25} rows={25} />
      <g transform='translate(105,125)'>
        <Square x={50} y={50} size={50} />
        <Circle x={200} y={75} radius={50} fill='green' />
        <Circle x={215} y={90} radius={25} fill='white' />
        <Circle x={220} y={90} radius={15} fill='black' />
        <Circle x={215} y={80} radius={5} fill='white' />
        <SparkLine
          x={25}
          y={200}
          width={250}
          data={[0, 10, 5, 25, 15, 35, 5, 18, 50, 3, 25, 2, 35, 10]}
        />
      </g>
    </svg>
    </>
  );
};

export default App;
