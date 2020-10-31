import Path from './Path';
import render from '../utils/render';

export const Circle = ({ size, cx, cy, children, ...attributes }) => {
  const p = new Path();
  const pathMethod = p.circle.bind(p, size, cx, cy);
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
