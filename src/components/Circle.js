import Path from './Path';
import render from '../utils/render';

export const Circle = ({ size, cx, cy, children, ...rest }) => {
  const p = new Path();
  const pathMethod = p.circle.bind(p, size, cx, cy);
  return render(pathMethod, rest, cx, cy, cx, cy, children);
};

Circle.path = ({ size, cx, cy }) => {
  return new Path().circle(size, cx, cy);
};
