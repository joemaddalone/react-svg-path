import React from 'react';
import { Svg, Polyline, Line, PathMerge, Rect } from 'react-svg-path';
import './Sparkline.css';
const scale = function (opts) {
  const dataStart = opts.domain[0],
    dataStop = opts.domain[1],
    chartStart = opts.range[0],
    chartStop = opts.range[1];

  return (value) =>
    chartStart +
    (chartStop - chartStart) * ((value - dataStart) / (dataStop - dataStart));
};

const Grid = ({ x, y, width, height, cols, rows, close = false }) => {
  const extra = close ? 1 : 0;
  const colWidth = width / cols;
  const rowHeight = height / rows;
  const horizontal = Array.from({ length: cols + extra }).map((_, index) => (
    <Line
      key={index}
      sx={x + index * colWidth}
      sy={y}
      ex={0}
      ey={height}
      relative
    />
  ));
  const vertical = Array.from({ length: rows + extra }).map((_, index) => (
    <Line
      key={index}
      sx={x}
      sy={y + index * rowHeight}
      ex={width}
      ey={0}
      relative
    />
  ));
  return <PathMerge stroke='#ddd'>{horizontal.concat(vertical)}</PathMerge>;
};

const SparkLine = ({ width, height, data }) => {
  const centerY = height / 2;
  const clone = [...data];
  clone.sort((a, b) => a - b);
  const low = clone[0];
  const hi = clone[clone.length - 1];

  var myScale = scale({ domain: [low, hi], range: [0, height] });

  const pointDistance = parseInt(width / data.length);
  const points = [[0, centerY]];
  data.forEach((newDataPoint, index) => {
    points.push([pointDistance * (index + 1), height - myScale(newDataPoint)]);
  });

  const margin = 10;
  const xSize = width + margin;
  const ySize = height + margin;

  return (
    <Svg
      width={xSize}
      height={ySize}
      scale
    >
      <g transform={`translate(${margin / 2},${margin / 2})`}>
        <Grid x={0} y={0} width={width} height={height} rows={10} cols={20} />
        <Polyline
          className='sparkline-path'
          points={points}
          stroke='red'
          strokeWidth={2}
          fill='none'
        />
      </g>
      <Rect
        cx={(xSize - 2) / 2}
        cy={(ySize - 2) / 2}
        width={xSize - 2}
        height={ySize - 2}
        fill='none'
        stroke='#333'
      />
    </Svg>
  );
};

export default SparkLine;
