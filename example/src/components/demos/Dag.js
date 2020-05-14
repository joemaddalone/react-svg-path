import React, { useEffect, useState } from 'react';
import Path from 'react-svg-path';
import dagre from 'dagre';
import Svg from '../Svg';

const Dag = () => {
  const [dag, setDag] = useState(null);
  useEffect(() => {
    var g = new dagre.graphlib.Graph();
    g.setGraph({
      rankdir: 'BT',
      marginx: 15,
      marginy: 50,
      nodesep: 10,
      ranksep: 50,
      edgesep: 5
    });

    g.setDefaultEdgeLabel(function () {
      return {};
    });

    const items = 'abcdefghijklmnopqrstuvwxyz'.split('');
    items.forEach((item) => g.setNode(item, { width: 25, height: 25 }));
    items.forEach((item, index, arr) => {
      if (index === 0) {
        return;
      }
      if (index < 5) {
        g.setEdge(item, 'a');
      } else if (index < 9) {
        g.setEdge(item, 'b');
      } else if (index < 15) {
        g.setEdge(item, 'c');
      } else if (index < 19) {
        g.setEdge(item, 'd');
      } else {
        g.setEdge(item, 'e');
      }
    });

    dagre.layout(g);

    setDag({
      nodes: g.nodes().map((node) => g.node(node)),
      edges: g.edges().map((edge) => g.edge(edge)),
      graph: g.graph()
    });
  }, []);

  const createPath = (edges, nodes) => {
    const p = new Path();
    edges.forEach(({ points, x, y }) => {
      const m = points.shift();
      p.M(m.x, m.y);
      points.forEach((point) => p.L(point.x, point.y));
    });
    nodes.forEach(({ width, height, x, y }) => {
      p.M(x - width / 2, y - height / 2)
        .right(width)
        .down(height)
        .left(width)
        .up(height);
    });

    return p.toString();
  };

  if (!dag) {
    return null;
  } else {
    return (
      <Svg width={dag.graph.width} height={dag.graph.height}>
        <path
          stroke='#222'
          strokeWidth={0.5}
          d={createPath(dag.edges, dag.nodes)}
        />
      </Svg>
    );
  }
};

export default Dag;
