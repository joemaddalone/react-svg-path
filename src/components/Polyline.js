import Path from './Path';

export const Polyline = ({ points, relative = false, ...rest }) =>
  new Path().polyline(points, relative).toComponent(rest);

Polyline.path = ({ points, relative }) => new Path().polyline(points, relative);
