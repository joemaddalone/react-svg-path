import Path from './Path';
import render from '../utils/render';

export const Ellipse = ({ width, height, cx, cy, children, ...rest }) => {
  const p = new Path();
  const pathMethod = p.ellipse.bind(p, width, height, cx, cy);
  return render(pathMethod, rest, cx, cy, children);
};

Ellipse.path = ({ width, height, cx, cy }) =>
  new Path().ellipse(width, height, cx, cy);
