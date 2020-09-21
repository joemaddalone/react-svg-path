import React from 'react';
import Path from 'react-svg-path';
import dagSetup from './dagSetup';
import Svg from '../../helpers/Svg';

const dag = dagSetup();

const DagSinglePath = () => {
  const createNodes = () => {
    const { nodes } = dag;
    const p = new Path();
    nodes.forEach(({ width, height, x, y }) => {
      p.M(x - width / 2, y - height / 2)
        .right(width)
        .down(height)
        .left(width)
        .up(height);
    });

    return p.toString();
  };

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

  return (
    <Svg width={dag.graph.width} height={dag.graph.height}>
      <path stroke='#222' strokeWidth={1} d={createConnectors()} />
      <path stroke='red' strokeWidth={1} d={createNodes()} />
    </Svg>
  );
};

export default DagSinglePath;
