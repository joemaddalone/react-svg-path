import Path from './Path';
import render from '../utils/render';

export const Square = ({ size, cx, cy, children, ...attributes }) => {
  const p = new Path();
  const pathMethod = p.square.bind(p, size, cx, cy);
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
