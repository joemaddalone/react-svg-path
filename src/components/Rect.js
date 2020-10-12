import Path from './Path';

export const Rect = ({ width, height, cx, cy, ...rest }) =>
  new Path().rect(width, height, cx, cy).toComponent(rest);
