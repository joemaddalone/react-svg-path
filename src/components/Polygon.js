import Path from './Path';

export const Polygon = ({ points, relative, ...rest }) =>
  new Path().polygon(points, relative).toComponent(rest);
