import createSimpleComponent from '../utils/createSimpleComponent';
import shorthand from '../utils/shorthand';
import docs from '../docs/docs.mjs';

const shapes = Object.keys(docs).reduce((accum, cur) => {
  const component = (props) => {
    const p = props ? shorthand(props) : props;
    return createSimpleComponent(docs[cur], p);
  };
  component.displayName = docs[cur].Component;
  accum[docs[cur].Component] = component;
  return accum;
}, {});

export const Circle = shapes.Circle;
export const Isocube = shapes.Isocube;
export const Kite = shapes.Kite;
export const Ellipse = shapes.Ellipse;
export const Lens = shapes.Lens;
export const Polygon = shapes.Polygon;
export const Polygram = shapes.Polygram;
export const Polyline = shapes.Polyline;
export const RadialLines = shapes.RadialLines;
export const Rect = shapes.Rect;
export const RegPolygon = shapes.RegPolygon;
export const Sector = shapes.Sector;
export const Segment = shapes.Segment;
export const Square = shapes.Square;
export const Star = shapes.Star;
export const Triangle = shapes.Triangle;
export const Line = shapes.Line;
export const Arc = shapes.Arc;
export const Cubic = shapes.Cubic;
export const Quad = shapes.Quad;
export const Cross = shapes.Cross;
export const SymV = shapes.SymV;
export const SymX = shapes.SymX;
export const SymH = shapes.SymH;
export const SymI = shapes.SymI;
export const RoundedRect = shapes.RoundedRect;
export const RoundedSquare = shapes.RoundedSquare;
export const Omino = shapes.Omino;
