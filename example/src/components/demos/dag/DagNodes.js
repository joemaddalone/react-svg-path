import React from 'react';
import Path, { Circle, Square, Svg } from 'react-svg-path';
import dagSetup from './dagSetup';

const dag = dagSetup();

// const Square = ({ x, y, size, ...rest }) => {
//   const path = new Path()
//     .moveTo(x, y)
//     .right(size)
//     .down(size)
//     .left(size)
//     .close();
//   return path.toComponent(rest);
// };

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
            cx={x}
            cy={y}
            size={width*1.4}
            style={{ fill: 'rebeccapurple', cursor: 'pointer' }}
            onClick={() => alert(`clicked node #${index}`)}
          />
        );
      })}
      {circleNodes.map(({ x, y, width }, index) => {
        return (
          <Circle
            key={index}
            cx={x}
            cy={y}
            size={width}
            style={{ fill: 'purple', cursor: 'pointer' }}
            onClick={() => alert(`clicked node #${index + 5}`)}
          />
        );
      })}
    </Svg>
  );
};

export default DagNodes;
