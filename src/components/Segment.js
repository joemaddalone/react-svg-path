import Path from './Path';

export const Segment = ({ cx, cy, radius, startAngle, endAngle, ...rest }) =>
  new Path().segment(cx, cy, radius, startAngle, endAngle).toComponent(rest);

Segment.path = ({ cx, cy, radius, startAngle, endAngle }) =>
  new Path().segment(cx, cy, radius, startAngle, endAngle);
