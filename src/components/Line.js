import Path from './Path';
import render from '../utils/render';

export const Line = ({
  sx,
  sy,
  ex,
  ey,
  relative = false,
  children,
  ...attributes
}) => {
  const p = new Path().moveTo(sx, sy);
  const pathMethod = p.lineTo.bind(p, ex, ey, relative);
  return render({
    pathMethod,
    attributes,
    ex: sx,
    ey: sy,
    sx: ex,
    sy: ey,
    children
  });
};

Line.path = ({ sx, sy, ex, ey, relative = false }) =>
  new Path().moveTo(sx, sy).lineTo(ex, ey, relative);
