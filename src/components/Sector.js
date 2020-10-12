import Path from './Path';

export const Sector = ({ cx, cy, radius, startAngle, endAngle, ...rest }) =>
  new Path().sector(cx, cy, radius, startAngle, endAngle).toComponent(rest);

Sector.path = ({ cx, cy, radius, startAngle, endAngle, ...rest }) =>
  new Path().sector(cx, cy, radius, startAngle, endAngle);
