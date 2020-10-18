import Path from './Path';
import render from '../utils/render';

export const Sector = ({ cx, cy, radius, startAngle, endAngle, children, ...rest }) => {
  const p = new Path();
  const pathMethod = p.sector.bind(p, cx, cy, radius, startAngle, endAngle);
  return render(pathMethod, rest, cx, cy, cx, cy, children);
};

Sector.path = ({ cx, cy, radius, startAngle, endAngle, ...rest }) =>
  new Path().sector(cx, cy, radius, startAngle, endAngle);
