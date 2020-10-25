import React from 'react';
import Path, { Svg } from 'react-svg-path';

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
  return <path d={lines.toString()} stroke='#ddd' />;
};

const SparkLine = ({ width, height, data }) => {
  const sparkline = new Path();
  const zero = height / 2;
  const pointDistance = parseInt(width / data.length);
  const points = data.map((d, index) => {
    if (index !== 0) {
      const prev = data[index - 1];
      return [pointDistance, prev - d];
    } else {
      return [pointDistance, d];
    }
  });
  points.unshift([0, zero + data.reduce((a, b) => a + b) / 2 - 10]);
  sparkline.polyline(points, true);

  return (
    <Svg width={width + 1} height={height + 1}>
      <Grid x={0} y={0} width={width} height={height} rows={10} cols={20} />
      <path d={sparkline.toString()} stroke='red' fill='none' />
      <path
        d={new Path().rect(width, height, width / 2, height / 2)}
        fill='none'
        stroke='#333'
      />
    </Svg>
  );
};

export default SparkLine;
