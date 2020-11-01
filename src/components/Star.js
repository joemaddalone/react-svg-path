import Path from './Path';
import render from '../utils/render';

export const Star = ({
  size,
  points,
  innerRadius,
  cx,
  cy,
  children,
  ...attributes
}) => {
  const p = new Path();
  const pathMethod = p.star.bind(p, size, points, cx, cy, innerRadius);
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
