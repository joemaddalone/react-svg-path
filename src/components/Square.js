import Path from './Path';

export const Square = ({ size, cx, cy, ...rest }) =>
  new Path().square(size, cx, cy).toComponent(rest);
