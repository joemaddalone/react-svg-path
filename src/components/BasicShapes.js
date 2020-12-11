import createSimpleComponent from '../utils/createSimpleComponent';
import { basicShapes } from '../docs/docs';

const shapes = Object.keys(basicShapes)
  .filter((k) => k !== 'line')
  .reduce((accum, cur) => {
    const component = (props) => createSimpleComponent(basicShapes[cur], props);
    component.displayName = basicShapes[cur].Component;
    accum[basicShapes[cur].Component] = component;
    return accum;
  }, {});

export const Circle = shapes.Circle;
export const Ellipse = shapes.Ellipse;
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
