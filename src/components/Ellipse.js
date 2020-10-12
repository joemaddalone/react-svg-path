import Path from './Path';

export const Ellipse = ({ width, height, cx, cy, ...rest }) =>
  new Path().ellipse(width, height, cx, cy).toComponent(rest);

Ellipse.path = ({ width, height, cx, cy }) =>
  new Path().ellipse(width, height, cx, cy);
