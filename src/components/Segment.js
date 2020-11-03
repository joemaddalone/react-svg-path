import Path from './Path';
import render from '../utils/render';

export const Segment = ({
  cx,
  cy,
  size,
  startAngle,
  endAngle,
  children,
  ...attributes
}) => {
  const p = new Path();
  const pathMethod = p.segment.bind(p, cx, cy, size, startAngle, endAngle);
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
