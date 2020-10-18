import Path from './Path';
import render from '../utils/render';

export const Square = ({ size, cx, cy, children, ...rest }) => {
  const p = new Path();
  const pathMethod = p.square.bind(p, size, cx, cy);
  return render(pathMethod, rest, cx, cy, cx, cy, children);
};

Square.path = ({ size, cx, cy }) => new Path().square(size, cx, cy);
