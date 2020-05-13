import React from 'react';
import Path from 'react-svg-path';

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

export default Grid;
