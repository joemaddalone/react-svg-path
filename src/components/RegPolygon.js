import Path from './Path';

export const RegPolygon = ({ size, sides, cx, cy, ...rest }) =>
  new Path().regPolygon(size, sides, cx, cy).toComponent(rest);

RegPolygon.path = ({ size, sides, cx, cy }) =>
  new Path().regPolygon(size, sides, cx, cy);
