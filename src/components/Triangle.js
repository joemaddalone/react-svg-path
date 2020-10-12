import Path from './Path';

export const Triangle = ({ size, cx, cy, ...rest }) =>
  new Path().triangle(size, cx, cy).toComponent(rest);

Triangle.path = ({ size, cx, cy }) => new Path().triangle(size, cx, cy);
