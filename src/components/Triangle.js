import Path from './Path';
import render from '../utils/render';

export const Triangle = ({ size, cx, cy, children, ...attributes }) => {
  const p = new Path();
  const pathMethod = p.triangle.bind(p, size, cx, cy);
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
