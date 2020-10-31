import Path from './Path';
import render from '../utils/render';

export const Segment = ({
  cx,
  cy,
  radius,
  startAngle,
  endAngle,
  children,
  ...attributes
}) => {
  const p = new Path();
  const pathMethod = p.segment.bind(p, cx, cy, radius, startAngle, endAngle);
  return render({
    pathMethod,
    attributes,
    ex: cx,
    ey: cy,
    sx: cx,
    sy: cy,
    children
  });
};

Segment.path = ({ cx, cy, radius, startAngle, endAngle, ...rest }) =>
  new Path().segment(cx, cy, radius, startAngle, endAngle);
