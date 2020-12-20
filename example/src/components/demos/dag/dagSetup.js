import dagre from "dagre";

const setupDag = (rankdir = "BT") => {
  var g = new dagre.graphlib.Graph();
  g.setGraph({
    rankdir,
    marginx: 15,
    marginy: 50,
    nodesep: 10,
    ranksep: 50,
    edgesep: 5
  });

  g.setDefaultEdgeLabel(function () {
    return {};
  });

  const items = "abcdefghijklmnopqrstuvwxyz".split("");
  items.forEach((item) => g.setNode(item, { width: 25, height: 25 }));
  items.forEach((item, index, arr) => {
    if (index === 0) {
      return;
    }
    if (index < 5) {
      g.setEdge(item, "a");
    } else if (index < 9) {
      g.setEdge(item, "b");
    } else if (index < 15) {
      g.setEdge(item, "c");
    } else if (index < 19) {
      g.setEdge(item, "d");
    } else {
      g.setEdge(item, "e");
    }
  });

  dagre.layout(g);

  return {
    nodes: g.nodes().map((node) => g.node(node)),
    edges: g.edges().map((edge) => g.edge(edge)),
    graph: g.graph()
  };
};

export default setupDag;
