import Path from './Path';
import render from '../utils/render';

export const Rect = ({ width, height, cx, cy, children, ...attributes }) => {
  const p = new Path();
  const pathMethod = p.rect.bind(p, width, height, cx, cy);
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
