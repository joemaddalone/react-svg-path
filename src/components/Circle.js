import Path from './Path';

export const Circle = ({ size, cx, cy, pathOnly, ...rest }) =>
  new Path().circle(size, cx, cy).toComponent(rest);

Circle.path = ({ size, cx, cy }) => new Path().circle(size, cx, cy);
