import Path from './Path';
import render from '../utils/render';

export const Polygram = ({
  size,
  points,
  vertextSkip,
  cx,
  cy,
  children,
  ...attributes
}) => {
  const p = new Path();
  const pathMethod = p.polygram.bind(p, size, points, cx, cy, vertextSkip);
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