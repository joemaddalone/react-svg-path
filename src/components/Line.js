import Path from './Path';
import render from '../utils/render';

export const Line = ({
  sx,
  sy,
  ex,
  ey,
  relative = false,
  children,
  ...rest
}) => {
  const p = new Path().moveTo(sx, sy);
  const pathMethod = p.lineTo.bind(p, ex, ey, relative);
  return render(pathMethod, rest, ex, ey, children);
};

Line.path = ({ sx, sy, ex, ey, relative = false }) =>
  new Path().moveTo(sx, sy).lineTo(ex, ey, relative);
