import React from 'react';
import Path from 'react-svg-path';
import dagSetup from './dagSetup';
import Svg from '../Svg';

const dag = dagSetup();

const Square = ({ x, y, size, ...rest }) => {
  const path = new Path()
    .moveTo(x, y)
    .right(size)
    .down(size)
    .left(size)
    .close()
  return path.toComponent(rest);
};

const Circle = ({ x, y, radius, fill, ...rest }) => {
  const path = new Path()
    .M(x, y)
    .m(-radius, 0)
    .a(radius, radius, 0, 1, 0, radius * 2, 0)
    .a(radius, radius, 0, 1, 0, -(radius * 2), 0)
    .style({ fill });
  return path.toComponent(rest);
};

const DagNodes = () => {
  const createConnectors = () => {
    const { edges } = dag;
    const p = new Path();
    edges.forEach(({ points, x, y }) => {
      const m = points.shift();
      p.M(m.x, m.y);
      points.forEach((point) => p.L(point.x, point.y));
    });

    return p.toString();
  };

  const squareNodes = dag.nodes.slice(0, 5);
  const circleNodes = dag.nodes.slice(5);

  return (
    <Svg width={dag.graph.width} height={dag.graph.height}>
      <path stroke='#222' strokeWidth={1} d={createConnectors()} />
      {squareNodes.map(({ x, y, width }, index) => {
        return (
          <Square
            key={index}
            x={x - width / 2}
            y={y - width / 2}
            size={width}
            style={{ fill: 'rebeccapurple', cursor: 'pointer' }}
            onClick={() => alert(`clicked node #${index}`)}
          />
        );
      })}
      {circleNodes.map(({ x, y, width }, index) => {
        return (
          <Circle
            key={index}
            x={x}
            y={y}
            radius={width / 2}
            style={{ fill: 'purple', cursor: 'pointer' }}
            onClick={() => alert(`clicked node #${index+5}`)}
          />
        );
      })}
    </Svg>
  );
};

export default DagNodes;
