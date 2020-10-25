import Path from './Path';
import render from '../utils/render';

export const Rect = ({ width, height, cx, cy, children, ...rest }) => {
  const p = new Path();
  const pathMethod = p.rect.bind(p, width, height, cx, cy);
  return render(pathMethod, rest, cx, cy, cx, cy, children);
};

Rect.path = ({ width, height, cx, cy }) =>
  new Path().rect(width, height, cx, cy);
