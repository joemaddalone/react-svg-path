import Path from './Path';
import render from '../utils/render';

export const Triangle = ({ size, cx, cy, children, ...rest }) => {
  const p = new Path();
  const pathMethod = p.triangle.bind(p, size, cx, cy);
  return render(pathMethod, rest, cx, cy, cx, cy, children);
};

Triangle.path = ({ size, cx, cy }) => new Path().triangle(size, cx, cy);
