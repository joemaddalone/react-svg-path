import Path from './components/Path';
import * as shapes from './components/BasicShapes';

/**  path basicShapes */
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
export const Line = shapes.Line;
export const Arc = shapes.Arc;

/** path curves */
export { Cubic } from './components/Cubic';
export { Quad } from './components/Quad';
// export { Arc } from './components/Arc';

/** react-svg-path specific  */
export { Text } from './components/Text';
export { Group } from './components/Group';
export { Svg } from './components/Svg';
export { PathMerge } from './components/PathMerge';
export { MarkerArrow } from './components/markers/MarkerArrow';
export { MarkerTriangle } from './components/markers/MarkerTriangle';
export { MarkerLine } from './components/markers/MarkerLine';
export { MarkerSquare } from './components/markers/MarkerSquare';
export { TextPath } from './components/TextPath';
export default Path;
